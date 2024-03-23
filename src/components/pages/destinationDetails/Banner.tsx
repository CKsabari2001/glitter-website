// Styled MUI
import { useMediaQuery } from "@mui/material";
import { CustomTypH1 } from "../../styled/Styled";
function Banner() {
  const md = useMediaQuery("(min-width:900px)");

  return (
    <>
      <div
        className="dd-banner"
        style={{
          backgroundImage: `url("/images/destinations-details-img-01.jpg")`,
          backgroundSize: "cover",
          padding: md ? "300px 0px" : "200px 0px",
        }}
      >
        <div className="dd-banner-content">
          <span className="bg-color"></span>
          <CustomTypH1
            variant="h1"
            component="h1"
            sx={{
              textAlign: "center",
              zIndex: "1",
              padding: "25px 50px",
              fontSize: md ? "46px" : "36px !important",
            }}
            className="dd-title"
          >
            Tuscany, Italy
          </CustomTypH1>
        </div>
      </div>
    </>
  );
}

export default Banner;
