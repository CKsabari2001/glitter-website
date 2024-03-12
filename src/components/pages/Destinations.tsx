// React Component
import Header from "../header/Header";
import EpicAdventure from "../pages/destinations/EpicAdventure";
import FindDestinations from "./common/FindDestinations";
import PlacesType from "./destinations/PlacesType";
import ProcessWay from "./destinations/ProcessWay";
import WondersOfWorlds from "./destinations/WondersOfWorlds";
import Footer from "../footer/Footer";
function Destinations() {
  return (
    <>
      <Header />
      <EpicAdventure />
      <FindDestinations />
      <PlacesType />
      <ProcessWay />
      <WondersOfWorlds />
      <Footer isHomePage={false} />
    </>
  );
}

export default Destinations;
