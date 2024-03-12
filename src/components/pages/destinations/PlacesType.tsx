import React from "react";

// Mui
import { Box, Grid, useMediaQuery } from "@mui/material";

function PlacesType() {
  const sm = useMediaQuery("(min-width:600px)");
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");
  const xl = useMediaQuery("(min-width:1536px)");

  const placesTypeArr = [
    {
      title: "Seas",
      img: "/images/places-type-01.jpg",
    },
    {
      title: "Mountains",
      img: "/images/places-type-02.jpg",
    },
    {
      title: "Cities",
      img: "/images/places-type-03.jpg",
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={xl ? 15 : lg ? 8 : md ? 6 : 4}
        sx={{ px: lg ? 10 : md ? 10 : sm ? 4 : 4, pb: md ? 15 : 10 }}
        className="places-type-section"
      >
        {placesTypeArr.map((obj, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <a href="#">
              <Box
                component="div"
                className="places-type-item"
                sx={{
                  "&::after": {
                    content: `'${obj.title}'`,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    transition: "all 0.3s ease",
                  },
                  "&:hover::after": {
                    content: "''",
                    backgroundColor: "rgba(0,0,0,0)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <img src={obj.img} alt="" />
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PlacesType;
