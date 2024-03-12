// Mui
import { Grid, useMediaQuery } from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../../styled/Styled";

// React Components
import EpicAdventureBanner from "./EpicAdventureBanner";

function EpicAdventure() {
  const md = useMediaQuery("(min-width:900px)");
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ px: 2, pt: md ? 8 : 5 }}
      >
        <Grid item lg={10} xl={6}>
          <CustomTypH1 variant="h1" component="h1" sx={{ textAlign: "center" }}>
            Embark on Epic Adventures
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{ textAlign: "center" }}
          >
            Embark on Epic Adventures and Uncover the World's Most Exotic
            Destinations with Glitter Travel Experts! Explore, Discover, and
            Experience the Journey of a Lifetime.
          </CustomTypP>
        </Grid>
        <Grid item xs={12}>
          <EpicAdventureBanner />
        </Grid>
      </Grid>
    </>
  );
}

export default EpicAdventure;
