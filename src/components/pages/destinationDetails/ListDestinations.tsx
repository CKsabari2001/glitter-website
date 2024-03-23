// Mui
import { Grid, useMediaQuery } from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../../styled/Styled";
function ListDestinations() {
  const xl = useMediaQuery("(min-width:1536px)");
  const lg = useMediaQuery("(min-width:1200px)");
  const md = useMediaQuery("(min-width:900px)");
  const sm = useMediaQuery("(min-width:600px)");

  const bestSpotArr = [
    {
      name: "Florence",
    },
    {
      name: "Siena",
    },
    {
      name: "Pisa",
    },
    {
      name: "Chianti",
    },
    {
      name: "San Gimignano",
    },
    {
      name: "Val d'Orcia",
    },
  ];

  const bestSpotImgArr = [
    {
      imgUrl: "/images/destinations-details-img-04.jpg",
    },
    {
      imgUrl: "/images/destinations-details-img-05.jpg",
    },
    {
      imgUrl: "/images/destinations-details-img-06.jpg",
    },
  ];
  return (
    <>
      <Grid
        container
        sx={{ px: lg ? 15 : md ? 10 : 5, pt: md ? 8 : 5 }}
        justifyContent={lg ? "space-between" : "center"}
        alignContent={"center"}
        columnSpacing={lg ? 5 : 0}
        rowSpacing={lg ? 0 : 5}
      >
        <Grid item md={12} lg={8}>
          <CustomTypH1
            variant="h1"
            component="h1"
            sx={{ textAlign: lg ? "start" : "center", pb: 2 }}
          >
            About Tuscany
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{ textAlign: lg ? "start" : "center" }}
          >
            Tuscany, located in central Italy, is renowned for its breathtaking
            landscapes, rich history, and world-class cuisine. With rolling
            hills, vineyards, and medieval towns dotting the countryside,
            Tuscany offers a quintessential Italian experience that captures the
            heart and soul of travelers.
          </CustomTypP>
          <div className="bestspot-container">
            <CustomTypH1
              variant="h1"
              component="h1"
              sx={{ textAlign: lg ? "start" : "center" }}
            >
              Best Spots to Visit in Tuscany
            </CustomTypH1>
            <Grid container rowSpacing={3} sx={{ pt: 4 }}>
              {bestSpotArr.map((item, i) => (
                <Grid key={i} item xs={4}>
                  <div className="bestspot-list-container">
                    <a href="#">
                      <img
                        src="/images/destinations-details-img-07.jpg"
                        alt=""
                      />
                      <CustomTypP
                        variant="body1"
                        component="p"
                        sx={{ textAlign: md ? "start" : "center" }}
                      >
                        {item.name}
                      </CustomTypP>
                    </a>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={xl ? 15 : lg ? 10 : md ? 5 : sm ? 8 : 5}
              sx={{ pt: 8 }}
            >
              {bestSpotImgArr.map((item, i) => (
                <Grid key={i} item xs={4}>
                  <img src={item.imgUrl} alt="" className="bestspot-img" />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={10} sm={6} md={4} lg={4} xl={3} alignContent={"center"}>
          <div className="booknow-container">
            <img src="/images/destinations-details-img-03.jpg" alt="" />
            <CustomTypH1
              variant="h1"
              component="h1"
              sx={{ textAlign: "center" }}
            >
              Book Now
            </CustomTypH1>
            <CustomTypP
              variant="body1"
              component="p"
              sx={{ textAlign: "center" }}
            >
              Contact our experts for personalized assistance
            </CustomTypP>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ px: lg ? 15 : md ? 10 : 5, pt: md ? 8 : 5 }}
        justifyContent={lg ? "space-between" : "center"}
        alignContent={"center"}
        columnSpacing={lg ? 5 : 0}
        rowSpacing={lg ? 0 : 5}
      >
        <Grid item md={12}>
          <CustomTypH1
            variant="h1"
            component="h1"
            sx={{ textAlign: lg ? "start" : "center", pb: 2 }}
          >
            How “Glitter” Helps Seniors Explore Tuscany
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{ textAlign: lg ? "start" : "center" }}
          >
            Our company understands the unique needs of senior travelers and
            specializes in creating tailored experiences that cater to their
            comfort and interests. In Tuscany, we prioritize accessible
            transportation, accommodations, and activities to ensure that
            seniors can fully enjoy the beauty and charm of the region. Our
            knowledgeable guides provide informative commentary and assistance
            throughout the journey, allowing seniors to explore Tuscany with
            confidence and ease. From cultural excursions to culinary
            experiences, we offer curated itineraries that highlight the best of
            Tuscany while accommodating the preferences of senior travelers.
          </CustomTypP>
        </Grid>
      </Grid>
    </>
  );
}

export default ListDestinations;
