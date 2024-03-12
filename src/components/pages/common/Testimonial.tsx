// MUI
import {
  useMediaQuery,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../../styled/Styled";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function Testimonial() {
  const isMobileScreen = useMediaQuery("(max-width:899px)");

  const testimonialsArr = [
    {
      imgUrl: "/images/testimonials-01.jpg",
      title: "Radha Patel",
      subTitle: "Kyoto, Japan",
      content:
        "An unforgettable journey to Kyoto with meticulous attention to detail!",
    },
    {
      imgUrl: "/images/testimonials-02.jpg",
      title: "Ramesh Kumar",
      subTitle: "Rome, Italy",
      content: "Exceeded my expectations in Rome with personalized service!",
    },
    {
      imgUrl: "/images/testimonials-03.jpg",
      title: "Leela Devi",
      subTitle: "Kyoto, Japan",
      content: "A perfect blend of cultural immersion and relaxation in Kyoto!",
    },
    {
      imgUrl: "/images/testimonials-04.jpg",
      title: "Suresh Sharma",
      subTitle: "Banff National Park, Canada",
      content:
        "Exceptional service and attention to detail in Banff National Park!",
    },
    {
      imgUrl: "/images/testimonials-01.jpg",
      title: "Radha Patel",
      subTitle: "Kyoto, Japan",
      content:
        "An unforgettable journey to Kyoto with meticulous attention to detail!",
    },
    {
      imgUrl: "/images/testimonials-02.jpg",
      title: "Ramesh Kumar",
      subTitle: "Rome, Italy",
      content: "Exceeded my expectations in Rome with personalized service!",
    },
    {
      imgUrl: "/images/testimonials-03.jpg",
      title: "Leela Devi",
      subTitle: "Kyoto, Japan",
      content: "A perfect blend of cultural immersion and relaxation in Kyoto!",
    },
    {
      imgUrl: "/images/testimonials-04.jpg",
      title: "Suresh Sharma",
      subTitle: "Banff National Park, Canada",
      content:
        "Exceptional service and attention to detail in Banff National Park!",
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
          px: isMobileScreen ? 4 : 0,
        }}
      >
        <CustomTypH1 variant="h1" component="h1" sx={{ textAlign: "center" }}>
          Rave Reviews: Hear What Our Travelers Say
        </CustomTypH1>

        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 90,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 120,
            },
            1800: {
              slidesPerView: 4,
              spaceBetween: 150,
            },
          }}
          className="testimonials-slider-container"
        >
          {testimonialsArr.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-container">
                <Card
                  className="testimonial-card"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    py: isMobileScreen ? 4 : 8,
                    px: 2,
                  }}
                >
                  <CardMedia
                    sx={{
                      objectFit: "cover",
                      width: "120px",
                      height: "120px",
                      mb: isMobileScreen ? 0 : 1,
                    }}
                    image={obj.imgUrl}
                    title={obj.title}
                  />
                  <CardContent>
                    <CustomTypP
                      variant="body1"
                      component="h5"
                      sx={{
                        fontWeight: "700",
                        fontFamily: "'Merriweather', serif",
                        color: "#202020",
                      }}
                    >
                      {obj.title}
                    </CustomTypP>
                    <CustomTypP
                      gutterBottom
                      variant="body1"
                      component="h6"
                      sx={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#202020",
                      }}
                    >
                      {obj.subTitle}
                    </CustomTypP>
                    <CustomTypP
                      variant="body1"
                      component="p"
                      sx={{
                        color: "#202020",
                        pt: isMobileScreen ? 3 : 5,
                      }}
                    >
                      {obj.content}
                    </CustomTypP>
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default Testimonial;
