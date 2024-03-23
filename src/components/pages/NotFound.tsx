// MUI
import { Grid } from "@mui/material";

// Styled MUI
import { CustomTypH1, CustomTypP } from "../styled/Styled";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Grid
        container
        spacing={0}
        className="notfound-container"
        justifyContent={"center"}
        alignContent={"center"}
        sx={{ backgroundColor: "#fff8e1", height: "100vh", px: 5 }}
      >
        <Grid item xs={12}>
          <CustomTypH1 variant="h1" component="h1" sx={{ textAlign: "center" }}>
            Page Not Found
          </CustomTypH1>
          <CustomTypP
            variant="body1"
            component="p"
            sx={{
              textAlign: "center",
            }}
          >
            Return to the Home Page
          </CustomTypP>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={"/home"} className="notfound-btn">
              Click Here
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default NotFound;
