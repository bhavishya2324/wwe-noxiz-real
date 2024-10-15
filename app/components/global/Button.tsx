import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export function RainbowButtonDemo() {
  return(
    <>
    <Link href="https://play.google.com/store/apps/details?id=com.brave.browser">
    <RainbowButton>Download Brave Browser for Remove Ads ➡</RainbowButton>
    </Link>
    </>


  )
}
