import { CSSProperties } from "react";

// MUI
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";

// // Styled MUI
// import { CustomTypP } from "../styled/Styled";

function HomeFooterImg() {
  const xs = useMediaQuery("(min-width:0px)");
  const sm = useMediaQuery("(min-width:600px)");
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");
  // const xl = useMediaQuery("(min-width:1536px)");
  const xxl = useMediaQuery("(min-width:1800px)");

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={10}
        lg={8}
        columnSpacing={lg ? 8 : 4}
        justifyContent={"center"}
        alignItems={"end"}
        className="homefooter-img-container"
      >
        <Grid item xs={12} sm={3}>
          <img src="/images/footer-img-01.jpg" alt="" className="shape-1" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src="/images/footer-img-02.jpg" alt="" className="shape-2" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/footer-img-03.jpg" alt="" className="shape-3" />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeFooterImg;
