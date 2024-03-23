import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// MUI
import { useMediaQuery, Typography } from "@mui/material/";
import { Link } from "react-router-dom";

function EpicAdventureBanner() {
  const md = useMediaQuery("(min-width:900px)");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const SliderArr = [
    {
      url: "/images/epic-adventure-slider-01.jpg",
      title: "Kyoto, Japan",
      price: "₹160,000 per person",
    },
    {
      url: "/images/epic-adventure-slider-02.jpg",
      title: "Rome, Italy",
      price: "₹200,000 per person",
    },
    {
      url: "/images/epic-adventure-slider-03.jpg",
      title: "Bali, Indonesia",
      price: "₹170,000 per person",
    },
    {
      url: "/images/epic-adventure-slider-04.jpg",
      title: "Tropical Paradise Retreat",
      price: "₹150,000 per person",
    },
  ];

  return (
    <div className="epic-adventure-slider">
      <Slider {...settings}>
        {SliderArr.map((item, index) => (
          <div key={index} className={`epic-adventure-slider-item`}>
            <img src={item.url} alt="" className={`slider-img`} />
            <Link to={"/destinations-details"}>
              <Typography
                variant="h3"
                component="h4"
                sx={{
                  textAlign: "center",
                  fontSize: md ? "28px" : "18px",
                  fontWeight: "700",
                  fontFamily: "'Merriweather', serif;",
                  color: "#202020",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h3"
                component="h5"
                sx={{
                  textAlign: "center",
                  fontSize: md ? "28px" : "18px !important",
                  fontWeight: "400",
                  color: "#202020",
                  fontFamily: "'Merriweather', serif;",
                  pt: md ? 2 : 1,
                }}
              >
                {item.price}
              </Typography>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default EpicAdventureBanner;
