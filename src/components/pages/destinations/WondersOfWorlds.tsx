// MUI
import { Grid, useMediaQuery } from "@mui/material";

// Styled Mui
import { CustomTypH1, CustomTypP } from "../../styled/Styled";

const wondersOfWorld = [
  {
    title: "Rome, Italy",
    imgUrl: "/images/wonders-world-01.jpg",
  },
  {
    title: "Prague, Czech Republic",
    imgUrl: "/images/wonders-world-02.jpg",
  },
  {
    title: "Kyoto, Japan",
    imgUrl: "/images/wonders-world-03.jpg",
  },
];

function WondersOfWorlds() {
  // const sm = useMediaQuery("(min-width:600px)");
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");
  const xl = useMediaQuery("(min-width:1536px)");
  return (
    <>
      <Grid
        container
        spacing={0}
        justifyContent={"center"}
        sx={{ px: 2, pb: md ? 10 : 8 }}
        className="wonders-of-worlds-container"
      >
        <Grid item md={10} xl={6}>
          <CustomTypH1 variant="h1" component="h1" sx={{ textAlign: "center" }}>
            Unlock the Wonders of the World
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{ textAlign: "center" }}
          >
            Embark on an unforgettable journey and explore the world's most
            captivating destinations with us
          </CustomTypP>
        </Grid>
        <Grid
          container
          spacing={xl ? 30 : lg ? 20 : md ? 10 : 5}
          justifyContent={"space-between"}
          sx={{
            pt: md ? 10 : 5,
            px: md ? 10 : 3,
          }}
        >
          {wondersOfWorld.map((obj, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <img src={obj.imgUrl} alt="" />
              <CustomTypH1
                variant="h1"
                component="h1"
                sx={{
                  textAlign: "center",
                  fontSize: md ? "28px" : "22px !important",
                  fontWeight: "700",
                  pt: 2,
                }}
              >
                {obj.title}
              </CustomTypH1>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default WondersOfWorlds;
