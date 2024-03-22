// React Component
import Footer from "../footer/Footer";
import Header from "../header/Header";

// React Component
import ContactUsBanner from "./contactUs/ContactUsBanner";
import ContactUsForm from "./contactUs/ContactUsForm";
import ContactMap from "./contactUs/ContactMap";
function ContactUs() {
  return (
    <>
      <Header />
      <ContactUsBanner />
      <ContactUsForm />
      <ContactMap />
      <Footer isHomePage={false} />
    </>
  );
}

export default ContactUs;
