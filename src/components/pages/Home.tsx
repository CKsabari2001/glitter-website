// React Component
import Header from "../header/Header";
import Footer from "../footer/Footer";
import HomeBanner from "./home/HomeBanner";
import DestinationsList from "./common/DestinationsList";
import CraftingMemories from "./home/CraftingMemories";
import Testimonial from "./common/Testimonial";
function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <DestinationsList />
      <CraftingMemories />
      <Testimonial />
      <Footer isHomePage />
    </>
  );
}

export default Home;
