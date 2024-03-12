import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// MUI
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function HomeBannerSlider() {
  const isMobileScreen = useMediaQuery("(max-width:899px)");
  const isSm = useMediaQuery("(max-width:530px)");
  const twoSlider = useMediaQuery("(max-width: 899px)");
  const threeSlider = useMediaQuery("(max-width:1199px)");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isSm ? 2 : 3,
    slidesToScroll: 1,
    vertical: isMobileScreen ? false : true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const SliderArr = [
    {
      url: "/images/home-banner-img-01.jpg",
      shape: "square-20",
    },
    {
      url: "/images/home-banner-img-02.jpg",
      shape: "square-30",
    },
    {
      url: "/images/home-banner-img-03.jpg",
      shape: "square-top-90",
      height: "extra-large",
    },
    {
      url: "/images/home-banner-img-04.jpg",
      shape: "square",
    },
    {
      url: "/images/home-banner-img-05.jpg",
      shape: "square-top-40",
    },
    {
      url: "/images/home-banner-img-06.jpg",
      shape: "square-top-botton-80",
      height: "extra-large",
    },
    {
      url: "/images/home-banner-img-07.jpg",
      shape: "round",
    },
    {
      url: "/images/home-banner-img-08.jpg",
      shape: "square-20",
    },
    {
      url: "/images/home-banner-img-09.jpg",
      shape: "square",
      height: "extra-large",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Grid item xs={12} md={6} lg={4}>
        <div className="slider-container">
          <Slider {...settings}>
            {SliderArr.map((item) => (
              <div key={item.url} className={`slider-item`}>
                <img
                  src={item.url}
                  alt=""
                  className={`${item.shape} ${item.height}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        sx={{
          display: twoSlider ? "none" : "block",
        }}
      >
        <div className="slider-container">
          <Slider {...{ ...settings, rtl: true }}>
            {SliderArr.map((item) => (
              <div key={item.url} className="slider-item">
                <img
                  src={item.url}
                  alt=""
                  className={`${item.shape} ${item.height}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        sx={{
          display: threeSlider ? "none" : "block",
        }}
      >
        <div className="slider-container">
          <Slider {...settings}>
            {SliderArr.map((item) => (
              <div key={item.url} className="slider-item">
                <img
                  src={item.url}
                  alt=""
                  className={`${item.shape} ${item.height}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Grid>
    </Grid>
  );
}

export default HomeBannerSlider;
