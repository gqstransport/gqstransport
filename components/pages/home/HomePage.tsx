import { HomeHero } from "./sections/HomeHero";
import { HomeAbout } from "./sections/HomeAbout";
import { HomeVisionMission } from "./sections/HomeVisionMission";
import { HomeHeavyTransport } from "./sections/HomeHeavyTransport";
import { HomeMachineryRental } from "./sections/HomeMachineryRental";
import { HomeHiabBoomTruck } from "./sections/HomeHiabBoomTruck";
import { HomeProjectLogistics } from "./sections/HomeProjectLogistics";
import { HomeIndustries } from "./sections/HomeIndustries";
import { HomeWhyChooseUs } from "./sections/HomeWhyChooseUs";
import { HomeOperationalAreas } from "./sections/HomeOperationalAreas";
import { HomeSafetyCommitment } from "./sections/HomeSafetyCommitment";
import { HomeStatsBar } from "./sections/HomeStatsBar";
import { HomeCTA } from "./sections/HomeCTA";

export async function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeVisionMission />
      <HomeHeavyTransport />
      <HomeMachineryRental />
      <HomeHiabBoomTruck />
      <HomeProjectLogistics />
      <HomeIndustries />
      <HomeWhyChooseUs />
      <HomeOperationalAreas />
      <HomeSafetyCommitment />
      <HomeStatsBar />
      <HomeCTA />
    </>
  );
}

