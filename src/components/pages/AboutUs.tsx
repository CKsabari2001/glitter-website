// React Component
import Header from "../header/Header";
import EpicAdventure from "./aboutUs/CmEpicAdventure";
import CraftingMemoriesJourney from "./aboutUs/CraftingMemoriesJourney";
import FindDestinations from "./common/FindDestinations";
import Testimonial from "../pages/common/Testimonial";
import Footer from "../footer/Footer";
function AboutUs() {
  return (
    <>
      <Header />
      <EpicAdventure />
      <CraftingMemoriesJourney />
      <FindDestinations />
      <Testimonial />
      <Footer isHomePage={false} />
    </>
  );
}

export default AboutUs;
