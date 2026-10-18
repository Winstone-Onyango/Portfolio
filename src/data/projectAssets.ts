// Real project screenshots (from Winstone's GitHub portfolio repo)
import supportsafe from "@/assets/projects/screens/supportsafe.png";
import winstoneAi from "@/assets/projects/screens/winstone-ai.png";
import roboticCamera from "@/assets/projects/screens/robotic-camera.png";
import camScanner from "@/assets/projects/screens/cam-scanner.png";

export interface ProjectAssets {
  featured: string;
  gallery: string[];
}

export const projectAssets: Record<string, ProjectAssets> = {
  "supportsafe": { featured: supportsafe, gallery: [supportsafe] },
  "winstone-ai": { featured: winstoneAi, gallery: [winstoneAi] },
  "robotic-camera": { featured: roboticCamera, gallery: [roboticCamera] },
  "cam-scanner": { featured: camScanner, gallery: [camScanner] },
};
