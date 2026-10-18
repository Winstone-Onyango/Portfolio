export interface Project {
  id: string;
  name: string;
  type: string;
  category: "professional" | "research";
  role: string;
  highlights: string[];
  tools: string[];
  image?: string;
  links?: { live?: string; code?: string };
  detail: {
    overview: string;
    scope: string;
    safety: string;
    codes: string[];
    methods: string;
    outcomes: string;
  };
}

export const projects: Project[] = [
  {
    id: "supportsafe",
    name: "SupportSafe",
    type: "AI Platform",
    category: "professional",
    role: "Full-Stack + AI Developer",
    highlights: [
      "Discreet, secure Gender-Based Violence support platform",
      "Helps survivors in Kenya seek help invisibly",
      "Legal-rights guidance and emotional support",
      "Steganography, RAG and NLP powered assistance",
    ],
    tools: ["Next.js", "Django", "MongoDB", "LLM", "Elevenlabs", "Steganography", "RAG", "NLP"],
    links: {
      live: "https://supportsafe.vercel.app",
      code: "https://github.com/Winstone-Onyango/SupportSafe.git",
    },
    detail: {
      overview: "A discreet, secure Gender-Based Violence support platform helping survivors in Kenya seek help invisibly, understand their legal rights, and access emotional support.",
      scope: "Full platform design and build \u2014 discreet access flows, legal-rights content, emotional-support assistance, secure data handling, LLM-powered help with RAG and NLP.",
      safety: "Privacy-first design for vulnerable users. Secure, discreet access patterns, responsible-AI handling for sensitive conversations, safe deployment practices.",
      codes: ["Responsible AI", "Secure Deployment", "Privacy by Design"],
      methods: "Next.js frontend with Django backend and MongoDB. Telegram, Twitter (Now X) + steganography for discreet communication, LLM + Avatar + Elevenlabs voice, RAG + NLP for grounded legal and emotional support.",
      outcomes: "Support platform concept delivering invisible help-seeking, legal-rights understanding, and emotional support for survivors in Kenya.",
    },
  },
  {
    id: "winstone-ai",
    name: "Winstone.ai",
    type: "AI Chat App",
    category: "professional",
    role: "AI / Full-Stack Developer",
    highlights: [
      "AI chat application engineered for developers",
      "Real-time code generation",
      "Intelligent programming support",
      "GPT-4 powered assistance",
    ],
    tools: ["Django REST Framework", "Django", "Python", "React.js", "GPT-4", "PostgreSQL"],
    links: {
      live: "https://winstone-ai-oe5k.vercel.app/",
      code: "https://github.com/Winstone-Onyango/Winstone.ai.git",
    },
    detail: {
      overview: "AI chat application engineered for developers, featuring real-time code generation and intelligent programming support.",
      scope: "Conversational developer assistant \u2014 real-time code generation, programming Q&A, project-aware help, chat persistence with robust backend APIs.",
      safety: "Grounded code assistance with responsible model use. Input handling, safe defaults, and clear capability boundaries for developer workflows.",
      codes: ["API Design", "Secure Backend", "Responsible AI"],
      methods: "Django REST Framework + Python backend with PostgreSQL. React.js chat frontend. GPT-4 integration for generation and programming support.",
      outcomes: "Developer-focused AI chat delivering fast code generation and intelligent, context-aware programming help.",
    },
  },
  {
    id: "robotic-camera",
    name: "Robotic Camera System",
    type: "Robotics / IoT",
    category: "professional",
    role: "Embedded + Vision Developer",
    highlights: [
      "Motorized pan-and-tilt camera",
      "Real-time face detection and tracking",
      "OpenCV on Raspberry Pi",
      "Stepper motors for smooth control",
    ],
    tools: ["Python", "OpenCV", "Raspberry Pi", "Robotics", "Deep Neural Networks"],
    links: {
      live: "https://drive.google.com/file/d/1UJYYMfoWTT1iSD_HcjDPnS2gyzAESXFm/view?usp=sharing",
      code: "https://github.com/Winstone-Onyango/Automated-Gimbal-System.git",
    },
    detail: {
      overview: "A motorized pan-and-tilt camera that detects and tracks faces in real time with OpenCV on a Raspberry Pi, driving stepper motors for smooth control.",
      scope: "Vision + motion system \u2014 face detection pipeline, tracking loop, pan-tilt kinematics, stepper-motor driving, smooth real-time control on edge hardware.",
      safety: "Controlled motion with bounded speeds, stable power handling, and safe test procedures for hardware-in-the-loop tracking.",
      codes: ["Embedded Best Practice", "Edge Compute", "Hardware Safety"],
      methods: "Python + OpenCV with deep neural networks for detection on Raspberry Pi. Stepper-motor control tuned for smooth pan-and-tilt tracking.",
      outcomes: "Working real-time tracker \u2014 camera follows faces smoothly via motorized pan-and-tilt driven by on-device vision.",
    },
  },
  {
    id: "cam-scanner",
    name: "Cam Scanner Mobile Application",
    type: "Mobile App",
    category: "professional",
    role: "Flutter Developer",
    highlights: [
      "Mobile document-scanning application",
      "Captures, crops, and enhances document images",
      "Turns physical documents into clean, shareable digital files",
      "Flutter + Dart with image processing",
    ],
    tools: ["Flutter", "Dart", "Image Processing"],
    links: {
      live: "https://camscanner.vercel.app",
      code: "https://github.com/Winstone-Onyango/Cam_scanner_Mobile_Application.git",
    },
    detail: {
      overview: "A mobile document-scanning app that captures, crops, and enhances images of physical documents into clean, shareable digital files.",
      scope: "End-to-end mobile scanner — camera capture, automatic crop detection, perspective correction, enhancement filters, and clean export for sharing.",
      safety: "On-device processing keeps sensitive documents private, with predictable image handling and bounded operations for smooth mobile performance.",
      codes: ["Mobile UX", "On-device Processing", "Privacy by Design"],
      methods: "Flutter + Dart with custom image-processing pipelines for cropping, enhancing, and exporting scanned documents.",
      outcomes: "Working mobile scanner turning paper documents into clean, shareable digital files in a few taps.",
    },
  },
];
