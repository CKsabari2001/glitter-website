// Mui
import { Grid, useMediaQuery } from "@mui/material";

// Styled MUI
import { CustomTypH1 } from "../../styled/Styled";

function DestinationList() {
  const xl = useMediaQuery("(min-width:1536px)");
  const lg = useMediaQuery("(min-width:1200px)");
  const md = useMediaQuery("(min-width:900px)");
  const sm = useMediaQuery("(min-width:600px)");

  const ddListArr = [
    {
      place: "Renaissance",
      imgUrl: "/images/dd-list-01.jpg",
    },
    {
      place: "Medieval",
      imgUrl: "/images/dd-list-02.jpg",
    },
    {
      place: "Iconic",
      imgUrl: "/images/dd-list-03.jpg",
    },
    {
      place: "Vineyards",
      imgUrl: "/images/dd-list-04.jpg",
    },
    {
      place: "Scenic",
      imgUrl: "/images/dd-list-05.jpg",
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{ px: lg ? 15 : md ? 10 : 5, pt: md ? 8 : 5 }}
        justifyContent={xl ? "space-between" : "center"}
        alignContent={"center"}
        columnSpacing={xl ? 10 : md ? 5 : sm ? 4 : 2}
        rowSpacing={sm ? 5 : 3}
      >
        {ddListArr.map((item, i) => (
          <Grid key={i} item>
            <div className="dd-list-container">
              <img src={item.imgUrl} alt="" />
              <a href="#" style={{ textDecoration: "none" }}>
                <CustomTypH1
                  variant="h1"
                  component="h3"
                  sx={{
                    textAlign: "center",
                    fontFamily: "font-family: 'Noto Sans', sans-serif",
                    fontSize: md ? "20px" : "16px !important",
                  }}
                >
                  {item.place}
                </CustomTypH1>
              </a>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default DestinationList;
