import React from "react";

// Mui
import { Box, Grid, useMediaQuery, Typography } from "@mui/material";

function FindDestinations() {
  const sm = useMediaQuery("(min-width:600px)");
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");
  const xl = useMediaQuery("(min-width:1536px)");

  return (
    <>
      <Box
        className="destinations-search"
        component="section"
        sx={{
          mt: md ? 8 : 0,
          mb: md ? 15 : 10,
          px: md ? 10 : 0,
        }}
      >
        <div className="destinations-search-container">
          <Grid container spacing={0} sx={{ px: xl ? 20 : lg ? 10 : 0 }}>
            <Grid item xs={12} lg={5} xl={4}>
              <Typography
                variant="h3"
                component="h4"
                sx={{
                  textAlign: lg ? "start" : "center",
                  fontSize: md ? "28px" : "22px",
                  fontWeight: "700",
                  fontFamily: "'Merriweather', serif;",
                  color: "#202020",
                }}
              >
                Find Destination
              </Typography>
              <Typography
                variant="h3"
                component="h5"
                sx={{
                  textAlign: lg ? "start" : "center",
                  fontSize: md ? "28px" : "22px !important",
                  fontWeight: "400",
                  color: "#202020",
                  pt: md ? 2 : 1,
                }}
              >
                Adventure Awaits Here
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={7}
              xl={8}
              sx={{
                display: "flex",
                flexDirection: sm ? "row" : "column",
                justifyContent: "start",
                alignItems: "center",
                px: lg ? 0 : sm ? 10 : 4,
              }}
            >
              <input
                type="text"
                id="destination-search"
                name="destination-search"
                placeholder="Uncover New Horizons"
              />
              <button className="destination-search-btn">Search</button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}

export default FindDestinations;
