import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tools" },
  { label: "Experience", href: "#expertise" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#codes" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <button
          onClick={() => {
            if (location.pathname !== "/") navigate("/");
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="Onyango Winstone — home"
        >
          <span className="font-display text-lg font-bold italic tracking-wide text-foreground leading-none antialiased">
            Onyango <span className="text-primary">Winstone</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollTo("#contact")}
            className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm text-xs font-semibold tracking-wide"
          >
            Let's Talk
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card border-border">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-left text-base text-foreground hover:text-primary transition-colors py-3 border-b border-border/50"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollTo("#contact")}
                  className="mt-4 bg-primary text-primary-foreground rounded-sm"
                >
                  Let's Talk
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

