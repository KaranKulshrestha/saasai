import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { LandingHero } from "@/components/landing-hero"

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
    </div>
  )
}
