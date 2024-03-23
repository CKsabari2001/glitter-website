// MUI
import { AppBar, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomAppBar = styled(AppBar)({
  backgroundColor: "#215732",
});
export const CustomButtonPrimary = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  backgroundColor: "#215732",
  borderRadius: "5px",
  padding: "4px 50px",
  textTransform: "capitalize",
  fontSize: "22px",
  "&:hover": {
    backgroundColor: "#ffc107",
  },
}));

export const CustomTypH1 = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    lineHeight: "2.6rem",
  },

  color: "#202020",
})) as typeof Typography;

export const CustomTypP = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    lineHeight: "1.8rem",
    color: "#202020",
  },

  color: "#202020",
})) as typeof Typography;
