// MUI
import { Grid, useMediaQuery } from "@mui/material";

function HomeFooterImg() {
  const lg = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={10}
        lg={8}
        columnSpacing={lg ? 8 : 4}
        justifyContent={"center"}
        alignItems={"end"}
        className="homefooter-img-container"
      >
        <Grid item xs={12} sm={3}>
          <img src="/images/footer-img-01.jpg" alt="" className="shape-1" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src="/images/footer-img-02.jpg" alt="" className="shape-2" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/footer-img-03.jpg" alt="" className="shape-3" />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeFooterImg;
