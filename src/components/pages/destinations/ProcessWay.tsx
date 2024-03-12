// Slick Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mui
import { Grid, useMediaQuery } from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../../styled/Styled";

function ProcessWay() {
  const sm = useMediaQuery("(min-width:600px)");
  const md = useMediaQuery("(min-width:900px)");
  const lg = useMediaQuery("(min-width:1200px)");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const processWayArr = [
    {
      title: "Explore Our Destinations",
      subTitle: "Discover a world of adventure and wonder",
      imgUrl: "/images/process-way-01.jpg",
    },
    {
      title: "Plan Your Journey",
      subTitle: "Let us help you create unforgettable memories",
      imgUrl: "/images/process-way-02.jpg",
    },
    {
      title: "Book Your Adventure",
      subTitle: "Start your next travel experience today",
      imgUrl: "/images/process-way-03.jpg",
    },
  ];

  const processWaySlider = [
    {
      title: "Personalized Itinerary",
      subTitle:
        "Customized plans tailored to you. Your perfect journey awaits!",
      imgUrl: "/images/process-way-slider-01.jpg",
    },
    {
      title: "24/7 Customer Support",
      subTitle: "24/7 Support for Your Travel Needs",
      imgUrl: "/images/process-way-slider-02.jpg",
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          pl: lg ? 10 : md ? 10 : sm ? 4 : 4,
          py: 5,
          pr: sm ? 4 : 4,
          mb: md ? 10 : 5,
        }}
        className="process-way-section"
      >
        <Grid item xs={12} md={12} lg={8} className="process-way-list">
          {processWayArr.map((obj, index) => (
            <Grid
              key={index}
              container
              rowSpacing={sm ? 0 : 1}
              columnSpacing={sm ? 4 : 0}
              sx={{
                py: 3,
              }}
            >
              <Grid item xs={12} sm={5} xl={4}>
                <img src={obj.imgUrl} alt="" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={7}
                xl={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CustomTypH1
                  variant="h1"
                  component="h5"
                  sx={{
                    textAlign: sm ? "start" : "center",
                    fontWeight: "700",
                    fontSize: md ? "20px" : "16px !important",
                  }}
                >
                  {obj.title}
                </CustomTypH1>
                <CustomTypP
                  variant="body1"
                  component="p"
                  sx={{
                    textAlign: sm ? "start" : "center",
                    fontWeight: "400",
                    fontSize: md ? "20px" : "16px !important",
                  }}
                >
                  {obj.subTitle}
                </CustomTypP>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          lg={4}
          className="process-way-slider"
        >
          <Slider {...settings}>
            {processWaySlider.map((obj, index) => (
              <div key={index}>
                <div className="slider-item-container">
                  <img src={obj.imgUrl} alt="" />
                  <div className="content">
                    <CustomTypH1
                      variant="h1"
                      component="h5"
                      sx={{
                        fontWeight: "700",
                        fontSize: md ? "20px" : "16px !important",
                      }}
                    >
                      {obj.title}
                    </CustomTypH1>
                    <CustomTypP
                      variant="body1"
                      component="p"
                      sx={{
                        fontWeight: "400",
                        fontSize: md ? "20px" : "16px !important",
                      }}
                    >
                      {obj.subTitle}
                    </CustomTypP>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </>
  );
}

export default ProcessWay;
