import { useMediaQuery } from "@mui/material";
function ContactMap() {
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4417315352!2d76.8848337863148!3d11.01412629523348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711120503125!5m2!1sen!2sin"
        width="100%"
        height={lg ? "600" : md ? "500" : "400"}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "0", marginBottom: "-5px" }}
      ></iframe>
    </>
  );
}

export default ContactMap;
