// MUI
import { useMediaQuery, Box, Grid } from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../../styled/Styled";

function DestinationsList() {
  const isMobileScreen = useMediaQuery("(max-width:899px)");
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:12000px)");

  const destinationsListArr = [
    {
      imgUrl: "/images/destinations-list-01.jpg",
      shape: "square-40",
      title: "Amalfi Coast",
    },
    {
      imgUrl: "/images/destinations-list-02.jpg",
      shape: "square",
      title: "Bali",
    },
    {
      imgUrl: "/images/destinations-list-03.jpg",
      shape: "square-top-90",
      title: "Great Barrier Reef",
    },
    {
      imgUrl: "/images/destinations-list-04.jpg",
      shape: "round",
      title: "Rome",
    },
    {
      imgUrl: "/images/destinations-list-05.jpg",
      shape: "square",
      title: "Tuscany",
    },
    {
      imgUrl: "/images/destinations-list-06.jpg",
      shape: "square-40",
      title: "Kerala",
    },
  ];

  return (
    <>
      <Box
        className="destinations-list"
        component="section"
        sx={{
          mt: isMobileScreen ? 6 : 8,
          mb: isMobileScreen ? 8 : 10,
          px: isMobileScreen ? 4 : 10,
        }}
      >
        <CustomTypH1 variant="h1" component="h1" sx={{ textAlign: "center" }}>
          Featured Destinations Spotlight
        </CustomTypH1>
        <CustomTypP variant="body1" component="p" sx={{ textAlign: "center" }}>
          Where Dreams Meet Reality.Explore top destinations handpicked for
          unforgettable experiences.
        </CustomTypP>
        <Grid
          container
          spacing={isMobileScreen ? 5 : md ? 7 : lg ? 15 : 15}
          sx={{
            pt: 8,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {destinationsListArr.map((obj) => (
            <Grid
              item
              key={obj.title}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={2}
              className="destinations-list-item"
            >
              <a href="#" style={{ textDecoration: "none" }}>
                <img
                  src={obj.imgUrl}
                  alt=""
                  className={`destinations-list-img ${obj.shape}`}
                />
                <CustomTypP
                  variant="h1"
                  component="p"
                  className="destinations-list-title"
                  sx={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "#202020",
                    pt: 3,
                  }}
                >
                  {obj.title}
                </CustomTypP>
              </a>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default DestinationsList;
