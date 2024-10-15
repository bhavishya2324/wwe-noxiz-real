import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/zBGpLI1O_Rw?si=VOgYdABMN3COAMr5"
        thumbnailSrc="./upscale1.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/zBGpLI1O_Rw?si=VOgYdABMN3COAMr5"
        thumbnailSrc="./upscale1.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
