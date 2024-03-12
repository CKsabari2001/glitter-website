// MUI
import { Grid, useMediaQuery } from "@mui/material";

// Styled MUI
import {
  CustomButtonPrimary,
  CustomTypH1,
  CustomTypP,
} from "../../styled/Styled";

// Components
import HomeBannerSlider from "./HomeBannerSlider";

const HomeBanner = () => {
  const isMobileScreen = useMediaQuery("(max-width:899px)");
  return (
    <>
      <div className="home-banner">
        <Grid
          container
          spacing={isMobileScreen ? 5 : 2}
          sx={{
            textAlign: isMobileScreen ? "center" : "start",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            order={isMobileScreen ? 1 : 0}
            xs={12}
            sm={11}
            md={6}
            xl={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobileScreen ? "center" : "start",
              justifyContent: "center",
            }}
          >
            <CustomTypH1 variant="h1" component="h1">
              Explore Senior-Friendly Destinations: Your Dream Adventures Await!
            </CustomTypH1>
            <CustomTypP
              variant="body1"
              component="p"
              sx={{ mt: isMobileScreen ? 1 : 2 }}
            >
              Explore senior-friendly destinations with Glitter Travel Experts.
              Embark on unforgettable journeys tailored to your needs. Discover
              iconic landmarks and immerse yourself in local cultures.
            </CustomTypP>
            <CustomButtonPrimary
              variant="contained"
              sx={{ my: isMobileScreen ? 3 : 6 }}
              href="#"
            >
              Visit Us
            </CustomButtonPrimary>
          </Grid>
          <Grid item xs={12} md={5}>
            <HomeBannerSlider />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomeBanner;
