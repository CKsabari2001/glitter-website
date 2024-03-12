// MUI
import { useMediaQuery, Grid } from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../../styled/Styled";

function CraftingMemoriesJourney() {
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <Grid
        container
        rowSpacing={6}
        justifyContent={"center"}
        className="crafting-memories-journey-section"
        sx={{ px: lg ? 10 : md ? 8 : 4, mb: md ? 15 : 12 }}
      >
        <Grid item xs={12}>
          <CustomTypH1 variant="h1" component="h1" sx={{ textAlign: "center" }}>
            Our Story: Crafting Memorable Journeys
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{ textAlign: "center" }}
          >
            At Glitter Travel Experts, we are passionate about curating
            unforgettable travel experiences tailored to your preferences. With
            decades of expertise and a dedication to exceptional service, we
            strive to make every journey a seamless and memorable adventure.
            Join us as we embark on a journey of exploration, discovery, and
            unforgettable moments together
          </CustomTypP>
        </Grid>

        <Grid item xs={12}>
          <img src="/images/about-us-CMJ-01.jpg" alt="" />
        </Grid>
      </Grid>
    </>
  );
}

export default CraftingMemoriesJourney;
