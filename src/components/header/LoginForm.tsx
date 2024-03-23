import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";

import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { CustomButtonPrimary } from "../styled/Styled";

interface Props {
  openLogin: boolean;
  loginHandler: () => void;
}

const contactFormArr = [
  {
    label: "Email id",
    PlaceHolder: "enter your email id",
    iconUrl: "/icons/email.svg",
  },
  {
    label: "Password",
    PlaceHolder: "enter password",
    iconUrl: "/icons/passwords.svg",
  },
];
function LoginForm({ openLogin, loginHandler }: Props) {
  return (
    <div>
      <Modal
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        open={openLogin}
        onClose={loginHandler}
        slots={{ backdrop: StyledBackdrop }}
        keepMounted
        className="modal-container"
      >
        <ModalContent sx={{ width: 1000, p: 0, border: 0, outline: 0 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <div className="img-container">
                <img
                  src="/images/glitter-logo.png"
                  alt=""
                  className="modal-logo"
                />
                <img
                  src="/images/loginform-img-01.jpg"
                  alt=""
                  className="modal-img"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="form-container">
                <h2 className="modal-title">Welcome</h2>
                <p className="modal-paragraph">Login with Email</p>
                <Grid
                  container
                  rowSpacing={4}
                  justifyContent="center"
                  sx={{ pt: 3 }}
                >
                  {contactFormArr.map((arr, i) => (
                    <Grid key={i} item xs={10}>
                      <div className="input-container">
                        <label>{arr.label}</label>
                        <input
                          type="text"
                          name="name"
                          placeholder={arr.PlaceHolder}
                        />
                        <img src={arr.iconUrl} alt="" />
                      </div>
                    </Grid>
                  ))}

                  <Grid item xs={10} className="modal-checkbox">
                    <div className="checkbox-container">
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember me"
                        sx={{
                          typography: {
                            fontSize: "14px !important",
                          },
                        }}
                      />
                    </div>

                    <a href="#">Forget Password ?</a>
                  </Grid>

                  <CustomButtonPrimary
                    variant="contained"
                    type="submit"
                    sx={{ margin: "auto", display: "block", mt: 4 }}
                  >
                    Submit
                  </CustomButtonPrimary>

                  <Grid item xs={10} className="login-with">
                    <p className="modal-paragraph">Or Login with</p>
                    <div className="social-icons">
                      <a href="#">
                        <img src="/icons/email.svg" alt="" />
                      </a>
                      <a href="#">
                        <img src="/icons/facebook.svg" alt="" />
                      </a>
                    </div>

                    <p className="modal-paragraph">
                      Don’t have an account? <a href="#">Sign Up</a>
                    </p>
                  </Grid>
                </Grid>

                <a onClick={loginHandler} className="close-button">
                  <img src="/icons/close.svg" alt="" />
                </a>
              </div>
            </Grid>
          </Grid>
        </ModalContent>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

// const blue = {
//   200: "#99CCFF",
//   300: "#66B2FF",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   700: "#0066CC",
// };

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)(`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.base-Modal-hidden {
    visibility: hidden;
  }
`);

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

// const TriggerButton = styled("button")(
//   ({ theme }) => css`
//     font-family: "IBM Plex Sans", sans-serif;
//     font-weight: 600;
//     font-size: 0.875rem;
//     line-height: 1.5;
//     padding: 8px 16px;
//     border-radius: 8px;
//     transition: all 150ms ease;
//     cursor: pointer;
//     background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//     border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//     color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
//     box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

//     &:hover {
//       background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
//       border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
//     }

//     &:active {
//       background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
//     }

//     &:focus-visible {
//       box-shadow: 0 0 0 4px
//         ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
//       outline: none;
//     }
//   `
// );

export default LoginForm;
