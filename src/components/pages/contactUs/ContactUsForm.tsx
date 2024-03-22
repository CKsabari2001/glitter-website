// MUI
import { useMediaQuery, Grid, TextField } from "@mui/material";

// Styled MUI
import {
  CustomTypH1,
  CustomTypP,
  CustomButtonPrimary,
} from "../../styled/Styled";

const contactFormArr = [
  {
    label: "Name",
    PlaceHolder: "enter your name",
    iconUrl: "/public/icons/user.svg",
  },
  {
    label: "City",
    PlaceHolder: "city of residence",
    iconUrl: "/public/icons/city.svg",
  },
  {
    label: "Email id",
    PlaceHolder: "enter your email id",
    iconUrl: "/public/icons/email.svg",
  },
  {
    label: "Whatsapp Number",
    PlaceHolder: "enter whatsapp number",
    iconUrl: "/public/icons/whatsapp.svg",
  },
  {
    label: "Travel Destination",
    PlaceHolder: "enter travel destination",
    iconUrl: "/public/icons/destination.svg",
  },
  {
    label: "Date of Travel",
    PlaceHolder: "select date of travel",
    iconUrl: "/public/icons/date.svg",
  },
];

function ContactUsForm() {
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ px: 2, pt: md ? 12 : 8 }}
      >
        <Grid item lg={10} xl={6}>
          <CustomTypH1 variant="h1" component="h1" sx={{ textAlign: "center" }}>
            Get in Touch with Us
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{ textAlign: "center" }}
          >
            We're here to listen and assist you. Drop us a message or give us a
            call – we'd love to hear from you and help with any inquiries or
            assistance you may need.
          </CustomTypP>
        </Grid>
      </Grid>

      <Grid
        className="contact-us-form-container"
        container
        justifyContent={"center"}
        sx={{ px: 2, pt: md ? 12 : 8, pb: 20 }}
      >
        <Grid item sm={10} md={12} lg={10} xl={8}>
          <Grid
            container
            justifyContent={"space-between"}
            rowSpacing={md ? 7 : 5}
            columnSpacing={lg ? 15 : md ? 10 : 0}
          >
            {contactFormArr.map((arr, i) => (
              <Grid key={i} item xs={12} md={6}>
                <div className="input-container">
                  <label>{arr.label}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={arr.PlaceHolder}
                  />
                  <img src={arr.iconUrl} alt="" />
                </div>
              </Grid>
            ))}
          </Grid>

          <CustomButtonPrimary
            variant="contained"
            type="submit"
            sx={{ margin: "auto", display: "block", mt: md ? 10 : 5 }}
          >
            Submit
          </CustomButtonPrimary>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUsForm;
