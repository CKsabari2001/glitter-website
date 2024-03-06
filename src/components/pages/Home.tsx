// React Component
import Header from "../Header";
import HomeBanner from "./home/HomeBanner";
import DestinationsList from "./common/DestinationsList";
import CraftingMemories from "./common/CraftingMemories";
function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <DestinationsList />
      <CraftingMemories />
    </>
  );
}

export default Home;
