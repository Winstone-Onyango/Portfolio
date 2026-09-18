"""Static sanity checks for the portfolio site.
Validates HTML tag balance, local file references, CSS braces/variables,
and that every class used in the HTML is actually styled.

Usage:  py validate.py
Exit code 0 = clean, 1 = problems found.
"""
import os
import re
import sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.abspath(__file__))
PAGES = ["index.html", "contact.html"]
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}

problems = []
warnings = []
notes = []

# Assets the user still has to drop in themselves.
PLACEHOLDER_PREFIXES = (
    "assets/profile", "assets/certs/", "assets/logos/", "assets/project",
)


class Checker(HTMLParser):
    """Track tag nesting, collect classes and local asset references."""

    def __init__(self, name):
        super().__init__(convert_charrefs=True)
        self.name = name
        self.stack = []
        self.local_refs = []
        self.classes = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag not in VOID:
            self.stack.append((tag, self.getpos()[0]))
        for cls in (attrs.get("class") or "").split():
            self.classes.add(cls)
        for attr in ("src", "href"):
            val = attrs.get(attr)
            if not val or val.startswith(("http", "mailto:", "tel:", "#", "//")):
                continue
            self.local_refs.append((val, self.getpos()[0]))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack:
            problems.append("%s: stray </%s> at line %d" % (self.name, tag, self.getpos()[0]))
            return
        open_tag, line = self.stack.pop()
        if open_tag != tag:
            problems.append("%s: <%s> (line %d) closed by </%s> at line %d"
                            % (self.name, open_tag, line, tag, self.getpos()[0]))


# ---------------------------------------------------------------- HTML
all_classes = set()
for page in PAGES:
    with open(os.path.join(ROOT, page), encoding="utf-8") as fh:
        html = fh.read()

    checker = Checker(page)
    checker.feed(html)
    checker.close()

    for tag, line in checker.stack:
        problems.append("%s: unclosed <%s> opened at line %d" % (page, tag, line))

    all_classes |= checker.classes

    for ref, line in checker.local_refs:
        clean = ref.split("#", 1)[0].split("?", 1)[0]
        if not clean:
            continue  # pure in-page fragment such as index.html#about
        if not os.path.exists(os.path.join(ROOT, clean.replace("/", os.sep))):
            if clean.startswith(PLACEHOLDER_PREFIXES) or clean.endswith(".pdf"):
                notes.append("%s: line %d -> %s not added yet (placeholder asset)"
                             % (page, line, clean))
            else:
                problems.append("%s: line %d -> missing file %r" % (page, line, ref))

    print("[%s] parsed OK - %d local refs, %d classes, %d ids"
          % (page, len(checker.local_refs), len(checker.classes),
             len(re.findall(r'id="', html))))

# ---------------------------------------------------------------- CSS
with open(os.path.join(ROOT, "css", "style.css"), encoding="utf-8") as fh:
    css = fh.read()

stripped = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
if stripped.count("{") != stripped.count("}"):
    problems.append("style.css: unbalanced braces (%d '{' vs %d '}')"
                    % (stripped.count("{"), stripped.count("}")))
else:
    print("[style.css] braces balanced - %d rule blocks" % stripped.count("{"))

defined = set(re.findall(r"(--[a-z0-9-]+)\s*:", css))
used = set(re.findall(r"var\((--[a-z0-9-]+)", css))
for var in sorted(used - defined):
    problems.append("style.css: var(%s) used but never defined" % var)
print("[style.css] %d custom properties defined, %d referenced, %d unused"
      % (len(defined), len(used), len(defined - used)))

css_classes = set(re.findall(r"\.([A-Za-z][A-Za-z0-9_-]*)", stripped))
for cls in sorted(all_classes - css_classes):
    warnings.append("HTML class '%s' has no rule in style.css" % cls)

# ----------------------------------------------------------- responsive
breakpoints = sorted({int(m) for m in re.findall(r"max-width:\s*(\d+)px", css)})
print("[style.css] responsive breakpoints: %s"
      % ", ".join("%dpx" % b for b in breakpoints))
if len(breakpoints) < 4:
    warnings.append("only %d max-width breakpoints found - page may not be responsive"
                    % len(breakpoints))

# ---------------------------------------------------------------- JS
with open(os.path.join(ROOT, "js", "script.js"), encoding="utf-8") as fh:
    js = fh.read()

js_ids = set(re.findall(r'getElementById\("([^"]+)"\)', js))
for page in PAGES:
    with open(os.path.join(ROOT, page), encoding="utf-8") as fh:
        present = set(re.findall(r'id="([^"]+)"', fh.read()))
    for missing in sorted(js_ids - present):
        notes.append("%s: JS looks for #%s (absent here; guarded in script.js)"
                     % (page, missing))
    print("[%s] JS ids found: %s" % (page, ", ".join(sorted(js_ids & present))))

for required, label in (("theme-select", "theme dropdown"),
                        ("scroll-progress", "progress bar"),
                        ("wa.me/254791002178", "WhatsApp direct link")):
    if required not in js:
        with open(os.path.join(ROOT, "index.html"), encoding="utf-8") as fh:
            if required in fh.read():
                continue
        warnings.append("%s: could not find %s" % (label, required))

# ----------------------------------------------------------------- report
print()
for note in notes:
    print("NOTE  " + note)
for warning in warnings:
    print("WARN  " + warning)
for problem in problems:
    print("FAIL  " + problem)
print("\n%d problem(s), %d warning(s), %d note(s)"
      % (len(problems), len(warnings), len(notes)))
sys.exit(1 if problems else 0)
