import Image from "next/image";
import type { ProjectImage } from "@/lib/projects/types";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { BrowserFrame } from "./BrowserFrame";

export function DesktopScreenshots({ images }: { images: ProjectImage[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {images.map((image, index) => (
        <figure key={index}>
          <BrowserFrame>
            {image.src ? (
              <Image src={image.src} alt={image.alt} width={1200} height={750} className="w-full" />
            ) : (
              <PlaceholderImage label={image.alt} aspect="video" className="rounded-none border-0" />
            )}
          </BrowserFrame>
          {image.caption && <figcaption className="mt-2 text-sm text-ink-muted">{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export function MobileScreenshots({ images }: { images: ProjectImage[] }) {
  return (
    <div className="flex flex-wrap gap-8">
      {images.map((image, index) => (
        <figure key={index} className="w-full max-w-[240px]">
          {image.src ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={480}
              height={1040}
              className="rounded-2xl border border-line"
            />
          ) : (
            <PlaceholderImage label={image.alt} aspect="mobile" />
          )}
          {image.caption && <figcaption className="mt-2 text-sm text-ink-muted">{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
