// React Components
import Header from "../header/Header";
import Banner from "./destinationDetails/Banner";
import DestinationList from "./destinationDetails/DestinationList";
import ListDestinations from "./destinationDetails/ListDestinations";
import DestinationsList from "./common/DestinationsList";
import Testimonial from "./common/Testimonial";
import Footer from "../footer/Footer";
function DestinationsDetails() {
  return (
    <>
      <Header />
      <Banner />
      <DestinationList />
      <ListDestinations />
      <DestinationsList />
      <Testimonial />
      <Footer isHomePage={false} />
    </>
  );
}

export default DestinationsDetails;
