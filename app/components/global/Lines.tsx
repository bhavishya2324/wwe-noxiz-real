import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Watch WWE For Free 💯"
      default_velocity={5}
      className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
