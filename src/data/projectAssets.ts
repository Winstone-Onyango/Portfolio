// Real project screenshots (from Winstone's GitHub portfolio repo)
import supportsafe from "@/assets/projects/screens/supportsafe.jpg";
import winstoneAi from "@/assets/projects/screens/winstone-ai.jpg";
import roboticCamera from "@/assets/projects/screens/robotic-camera.jpg";
import GameForge from "@/assets/projects/screens/GameForge.jpg";
import YTdownloader from "@/assets/projects/screens/YTdownloader.jpg";
import BotanicalBeauty from "@/assets/projects/screens/Botanical.jpg";

export interface ProjectAssets {
  featured: string;
  gallery: string[];
}

export const projectAssets: Record<string, ProjectAssets> = {
  "supportsafe": { featured: supportsafe, gallery: [supportsafe] },
  "winstone-ai": { featured: winstoneAi, gallery: [winstoneAi] },
  "robotic-camera": { featured: roboticCamera, gallery: [roboticCamera] },
  "GameForge": { featured: GameForge, gallery: [GameForge] },
  "BotanicalBeauty": { featured: BotanicalBeauty, gallery: [BotanicalBeauty] },
  "YTdownloader": { featured: YTdownloader, gallery: [YTdownloader] },
};
