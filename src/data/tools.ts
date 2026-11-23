
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
    category: "Software Development, AI/ML",
    tools: [
      { name: "Python", context: "Backend development, scripting & automation" },
      { name: "JavaScript / TypeScript", context: "Web development & interactive applications" },
      { name: "React.js / Next.js", context: "Frontend development & web applications" },
      { name: "Django / Django REST", context: "Backend development & RESTful APIs" },
      { name: "Flutter / Dart", context: "Cross-platform mobile application development" },
      { name: "C / C++", context: "Systems programming & embedded software" },
      { name: "Deep Neural Networks", context: "Neural network development & model training" },
      { name: "TensorFlow / scikit-learn", context: "Machine learning model development & evaluation" },
      { name: "OpenCV / DNNs", context: "Computer vision, image processing & object detection" },
      { name: "LLMs", context: "Large language models & conversational AI" },
      { name: "RAG / NLP", context: "Information retrieval & natural language processing" },
      { name: "NumPy / Pandas", context: "Data processing, manipulation & analysis" },
      { name: "PostgreSQL / MySQL", context: "Relational database design & management" },
      { name: "MongoDB", context: "NoSQL databases & application data storage" },
      { name: "Database Management", context: "Data modelling, queries & optimisation" },
      { name: "Docker", context: "Application containerisation & deployment" },
      { name: "Kubernetes", context: "Container orchestration & application scaling" },
      { name: "CI/CD", context: "Automated testing, integration & deployment" },
      { name: "Git / GitHub", context: "Version control & collaborative development" },
      { name: "Linux", context: "Command-line operations & system administration" },
    ],
  },
  {
    category: "Networking & Telecommunications",
    tools: [
      { name: "Computer Networking", context: "TCP/IP, network protocols & data communication" },
      { name: "Network Design & Management", context: "Network architecture, configuration & troubleshooting" },
      { name: "Routing & Switching", context: "Network connectivity, routing & switching concepts" },
      { name: "Cisco Packet Tracer", context: "Network topology design & simulation" },
      { name: "Fibre Optics", context: "Optical communication & fibre infrastructure" },
      { name: "SCADA Systems", context: "Industrial monitoring & control systems" },
      { name: "Network Automation", context: "Exploring programmable network management" },
    ],
  },
  {
    category: "Embedded Systems & Robotics",
    tools: [
      { name: "Raspberry Pi", context: "Embedded computing & edge-based applications" },
      { name: "Arduino / ESP32", context: "Microcontroller programming & IoT prototyping" },
      { name: "Robotics", context: "Motion control & electromechanical systems" },
      { name: "IoT Systems", context: "Sensor integration, connectivity & automation" },
      { name: "MATLAB", context: "Engineering simulation & system modelling" },
      { name: "AutoCAD", context: "Engineering design & electronic circuit simulation" },
      { name: "Digital Signal Processing", context: "Signal analysis, processing & instrumentation" },
    ],
  },
];
