export interface Tool {
  name: string;
  context: string;
}

export interface ToolCategory {
  category: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    category: "Software Development",
    tools: [
      { name: "Python", context: "Backend, scripting & AI for software engineering" },
      { name: "JavaScript / TypeScript", context: "Web development & interactive UIs" },
      { name: "React.js / Next.js", context: "Frontend apps & portfolio platforms" },
      { name: "Django / Django REST", context: "Backend APIs & web platforms" },
      { name: "Flutter", context: "Cross-platform mobile development" },
      { name: "Dart", context: "Flutter app development" },
      { name: "C / C++", context: "Systems & performance-focused programming" },
      { name: "HTML / CSS", context: "Web development foundations" },
    ],
  },
  {
    category: "AI / ML",
    tools: [
      { name: "LLMs", context: "Conversational AI & code generation" },
      { name: "RAG / NLP", context: "Retrieval-augmented support & language systems" },
      { name: "OpenCV / DNNs", context: "Face detection & real-time vision" },
      { name: "TensorFlow / scikit-learn", context: "Model training & evaluation" },
      { name: "NumPy / Pandas", context: "Data preparation & analysis" },
      { name: "AI Security & Governance", context: "Threat models & responsible-AI practices" },
    ],
  },
  {
    category: "Telecom & Networks",
    tools: [
      { name: "SCADA Systems", context: "Real-time monitoring & utility networks" },
      { name: "Network Design & Management", context: "Design, security & cryptography" },
      { name: "Network Automation", context: "Currently exploring automation flows" },
      { name: "Fibre Optics & Packet Tracer", context: "Physical media & network simulation" },
      { name: "Computer Networking", context: "Data communication & protocols" },
    ],
  },
  {
    category: "Embedded & IoT",
    tools: [
      { name: "Raspberry Pi", context: "Edge compute & vision tracking" },
      { name: "IoT-Embedded Systems", context: "Currently exploring hardware + software builds" },
      { name: "Robotics / Stepper Motors", context: "Pan-and-tilt control systems" },
      { name: "Arduino / ESP32", context: "Microcontroller & IoT prototyping" },
      { name: "MATLAB / AutoCAD / PSpice", context: "Simulation & engineering design" },
      { name: "Digital Signal Processing", context: "Signals, image & instrumentation" },
    ],
  },
  {
    category: "Data & Cloud",
    tools: [
      { name: "MongoDB / PostgreSQL", context: "App databases & chat persistence" },
      { name: "Database Management", context: "Modelling, queries & optimisation" },
      { name: "Kubernetes / Cloud Native", context: "Pods, services, deployments & scaling" },
      { name: "Docker / CI/CD", context: "Containers & deployment pipelines" },
      { name: "Git & GitHub", context: "Version control & collaboration" },
      { name: "MySQL", context: "Relational database systems" },
      { name: "Linux Tooling", context: "Cloud native stack foundations" },
    ],
  },
];
