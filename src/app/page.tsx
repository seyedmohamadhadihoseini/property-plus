import HeroSection from "@/components/Hero";
import HomePropertiesCompnent from "@/components/HomeProperties";
import InfoBoxesPart from "@/components/InfoBoxes.tsx";

export default function Home() {
  console.log("url :",process.env.MONGODB_URL);
  return <div>
    <HeroSection />
    <InfoBoxesPart />
    <HomePropertiesCompnent />
  </div>
}
