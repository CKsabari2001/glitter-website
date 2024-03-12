// MUI
import { useMediaQuery, Grid } from "@mui/material";

// Styled MUI
import {
  CustomTypH1,
  CustomTypP,
  CustomButtonPrimary,
} from "../../styled/Styled";

function CraftingMemories() {
  const isMobileScreen = useMediaQuery("(max-width:899px)");
  const sm = useMediaQuery("(min-width:500px)");
  const lg = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          mt: isMobileScreen ? 6 : 8,
          mb: isMobileScreen ? 8 : 10,
        }}
        className="crafting-memories"
      >
        <Grid item xs={12} lg={5} sx={{ pt: sm ? (lg ? 0 : 6) : 0 }}>
          <img
            src="/images/crafting-memories-01.jpg"
            alt=""
            className="crafting-memories-img"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: lg ? "start" : "center",
            justifyContent: "center",
            px: isMobileScreen ? 4 : 10,
            py: 4,
          }}
        >
          <CustomTypH1
            variant="h1"
            component="h1"
            sx={{ textAlign: lg ? "start" : "center" }}
          >
            Crafting Memories, One Journey
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{
              mt: isMobileScreen ? 1 : 2,
              textAlign: lg ? "start" : "center",
            }}
          >
            At Glitter Travel Experts, we're more than just a travel company;
            we're your trusted companions on the journey of a lifetime. With
            decades of experience and a passion for crafting unforgettable
            memories, we specialize in curating senior-friendly travel
            experiences tailored to your unique preferences and needs. From
            iconic landmarks to hidden gems, we're dedicated to ensuring every
            moment of your adventure is filled with joy, discovery, and lasting
            happiness. Join us as we embark on a journey of exploration,
            inspiration, and unforgettable moments together.
          </CustomTypP>
          <CustomButtonPrimary
            variant="contained"
            sx={{
              my: isMobileScreen ? 3 : 6,
            }}
            href="#"
          >
            Explore Now
          </CustomButtonPrimary>
        </Grid>
      </Grid>
    </>
  );
}

export default CraftingMemories;
