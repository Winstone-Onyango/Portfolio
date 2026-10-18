import { Project } from "@/data/projects";
import { projectAssets } from "@/data/projectAssets";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  project: Project;
  onClose: () => void;
}

function DetailSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <h4 className="font-mono text-xs tracking-widest text-primary uppercase mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}

export function ProjectDetail({ project, onClose }: Props) {
  const assets = projectAssets[project.id];
  const images = assets?.gallery && assets.gallery.length > 0
    ? assets.gallery
    : assets?.featured
    ? [assets.featured]
    : [];
  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm bg-card border-border p-4 sm:p-6">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="rounded-sm text-xs font-mono border-primary/30 text-primary">
              {project.type}
            </Badge>
            <span className="text-xs font-mono text-primary/70">
              {project.role}
            </span>
          </div>
          <DialogTitle className="text-2xl text-foreground">
            {project.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {images.length > 0 && (
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((src, i) => (
                    <CarouselItem key={i}>
                      <div className="relative flex items-center justify-center rounded-sm border border-border bg-black/40 p-2">
                        <img
                          src={src}
                          alt={`${project.name} ${i + 1}`}
                          className="block w-auto h-auto max-w-full max-h-[70vh] object-contain"
                        />
                        <span className="absolute bottom-2 right-2 font-mono text-[10px] text-primary bg-card/80 px-2 py-1 rounded-sm">
                          {i + 1} / {images.length}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          )}

          <DetailSection title="Overview" content={project.detail.overview} />
          <div className="glow-line" />
          <DetailSection title="Build Scope" content={project.detail.scope} />
          <div className="glow-line" />
          <DetailSection title="Reliability & Safety Notes" content={project.detail.safety} />
          <div className="glow-line" />

          <div>
            <h4 className="font-mono text-xs tracking-widest text-primary uppercase mb-2">
              Stack & Practices
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.detail.codes.map((code) => (
                <span
                  key={code}
                  className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded-sm border border-primary/20"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>

          <div className="glow-line" />
          <DetailSection title="Tools & Methods" content={project.detail.methods} />
          <div className="glow-line" />
          <DetailSection title="Key Outcomes" content={project.detail.outcomes} />

          {(project.links?.live || project.links?.code) && (
            <>
              <div className="glow-line" />
              <div>
                <h4 className="font-mono text-xs tracking-widest text-primary uppercase mb-3">
                  Links
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs bg-primary/10 text-primary px-4 py-2 rounded-sm border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      View Site →
                    </a>
                  )}
                  {project.links?.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs bg-muted text-muted-foreground px-4 py-2 rounded-sm border border-border hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
