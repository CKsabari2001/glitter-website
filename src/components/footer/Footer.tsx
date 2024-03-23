import { CSSProperties } from "react";

// MUI
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

// Styled MUI
import { CustomTypP } from "../styled/Styled";

// React Components
import HomeFooterImg from "./HomeFooterImg";

function Footer({ isHomePage }: { isHomePage: boolean }) {
  const xs = useMediaQuery("(min-width:0px)");
  const sm = useMediaQuery("(min-width:600px)");
  const xmd = useMediaQuery("(min-width:750px)");
  const md = useMediaQuery("(min-width:900px)");
  const xlg = useMediaQuery("(min-width:1150px)");
  const lg = useMediaQuery("(min-width:1200px)");
  const xxlg = useMediaQuery("(min-width:1350px)");
  const xl = useMediaQuery("(min-width:1536px)");
  const xxl = useMediaQuery("(min-width:1800px)");

  const footerContainer = {
    pl: xxl ? 15 : lg ? 10 : sm ? 7 : 5,
    pr: lg ? 10 : sm ? 10 : 5,
    justifyContent: "center",
    background: isHomePage
      ? sm
        ? "url(/images/footer-bg.jpg)"
        : "#215732"
      : "#215732",
    backgroundPosition: isHomePage ? "top" : "",
    backgroundRepeat: isHomePage ? "no-repeat" : "",
    backgroundSize: isHomePage ? "cover" : "",
    paddingTop: isHomePage
      ? xl
        ? "300px"
        : md
        ? "250px"
        : sm
        ? "200px"
        : ""
      : "",
    marginTop: isHomePage
      ? xl
        ? "700px"
        : xxlg
        ? "450px"
        : lg
        ? "400px"
        : xlg
        ? "500px"
        : md
        ? "400px"
        : xmd
        ? "350px"
        : sm
        ? "250px"
        : ""
      : "",
  };

  const centerFooter: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Grid
        container
        spacing={0}
        className="footer-container"
        sx={footerContainer}
      >
        {isHomePage && sm && <HomeFooterImg />}
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{ textAlign: sm ? "start" : "center", pb: xs ? 5 : 0 }}
        >
          <CustomTypP
            variant="body1"
            component="h6"
            sx={{
              fontWeight: "700",
              color: "#FFC107 !important",
              fontFamily: "'Merriweather', serif;",
            }}
          >
            Contact Details
          </CustomTypP>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{
              color: "#ffffff !important",
              pt: 3,
            }}
          >
            456 Sunshine Street,
            <br />
            Gleaming City,
            <br />
            Bangalore, India
          </CustomTypP>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{
              color: "#ffffff !important",
              pt: 2,
            }}
          >
            <span>Tel.</span> +91 9876543210
            <br />
            <span>Email.</span>
            <a href="#" className="footer-link">
              {""} info@glittertravelexperts.in
            </a>
          </CustomTypP>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: lg ? "center" : sm ? "end" : "center",
            justifyContent: lg ? "center" : "start",
          }}
        >
          <div style={centerFooter}>
            <a href="#">
              <img
                src="/images/glitter-logo.png"
                alt=""
                className="footer-log"
              />
            </a>
            <CustomTypP
              variant="body1"
              component="p"
              sx={{
                color: "#ffffff !important",
                pt: 3,
                textAlign: "center",
              }}
            >
              Discover the World with
              <br />
              <span>Glitter Travel Experts</span>
            </CustomTypP>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CustomTypP
            variant="body1"
            component="h6"
            sx={{
              fontWeight: "700",
              color: "#FFC107 !important",
              fontFamily: "'Merriweather', serif;",
              pb: 3,
              textAlign: "center",
              pt: lg ? 0 : 5,
            }}
          >
            Follow Us
          </CustomTypP>
          <Box>
            <Stack direction="row" spacing={2} className="social-icons">
              <a href="#">
                <span>
                  <InstagramIcon />
                </span>
              </a>
              <a href="#">
                <span>
                  <FacebookOutlinedIcon />
                </span>
              </a>
              <a href="#">
                <span>
                  <YouTubeIcon />
                </span>
              </a>
              <a href="#">
                <span>
                  <TwitterIcon />
                </span>
              </a>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <div className="footer-bottom">
        <CustomTypP
          variant="body1"
          component="h6"
          sx={{
            fontWeight: "700",
            color: "#202020",
            textAlign: "center",
          }}
        >
          Developed by{" "}
          <a
            href="#"
            style={{
              fontWeight: "700",
              color: "#215732",
              textDecoration: "none",
            }}
          >
            <span>CK Sabari</span>
          </a>
        </CustomTypP>
      </div>
    </>
  );
}

export default Footer;
