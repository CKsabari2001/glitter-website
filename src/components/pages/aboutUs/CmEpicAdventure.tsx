// MUI
import { useMediaQuery, Grid } from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../../styled/Styled";

function EpicAdventure() {
  const isMobileScreen = useMediaQuery("(max-width:899px)");
  const sm = useMediaQuery("(min-width:500px)");
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");

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
            Our Story: Crafting Memorable Journeys
          </CustomTypP>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          mt: isMobileScreen ? 6 : 8,
        }}
        className="crafting-memories"
      >
        <Grid item xs={12} lg={6} sx={{ pt: sm ? (lg ? 0 : 6) : 0 }}>
          <img
            src="/images/crafting-memories-02.jpg"
            alt=""
            className="crafting-memories-img"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
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
            Unveiling Travel Magic
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{
              mt: isMobileScreen ? 1 : 2,
              textAlign: lg ? "start" : "center",
            }}
          >
            At Glitter Travel Experts, we are more than just a travel agency -
            we are your companions on the journey of a lifetime. With a
            commitment to excellence and a passion for exploration, we
            specialize in crafting bespoke travel experiences that cater to your
            every need. From luxurious getaways to off-the-beaten-path
            adventures, let us guide you on a transformative journey where every
            moment is infused with wonder and discovery. Join us and let the
            magic of travel unfold.
          </CustomTypP>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          mb: isMobileScreen ? 8 : 10,
        }}
        className="crafting-memories"
      >
        <Grid
          item
          xs={12}
          lg={6}
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
        </Grid>
        <Grid item xs={12} lg={6} sx={{ pb: sm ? (lg ? 0 : 6) : 0 }}>
          <img
            src="/images/crafting-memories-01.jpg"
            alt=""
            className="crafting-memories-img"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default EpicAdventure;
