import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
import { colors } from "../styles/colors";
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import {
  LocationOn,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import "animate.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white",
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "white",
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "white",
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "white",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white",
  },
});

export default function Events() {
  const [state, handleSubmit] = useForm("xzbwdzwy");
  useEffect(() => {
    document.title = "CONTACT | EDC";
  }, []);
  return (
    <Box sx={{}}>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
          fontWeight: "bold",
          textShadow: "2px 2px maroon",
          width: "fit-content",
          color: colors.white,
          borderRadius: "10px",
          padding: "0 5%",
          ":first-letter": {
            color: colors.warning,
            fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "50%",
            marginTop: -1,
            marginBottom: 4,
            borderTop: `5px solid ${colors.warning}`,
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        Contact
      </Typography>
      <Box
        sx={{
          backgroundImage: `url("/assets/backgrounds/blob-scatter-haikei.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Layout>
          <Box
            sx={{
              minWidth: "100vw",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              p: 7,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                // height:"100%",
                p: 5,
                display: "flex",
                flexDirection: "column",
                // alignItems:"center"
                // border:"2px solid blue",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: colors.white,
                  }}
                >
                  <LocationOn /> Address
                </Typography>
                <Typography variant="p" sx={{ marginLeft: "20px" }} color={colors.white}>
                  Jalpaiguri Government Engineering College,
                  <br /> P.O. Denguajhar,
                  <br /> Dist. - Jalpaiguri, 735102,
                  <br /> West Bengal, India
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "#4267B2",
                  }}
                >
                  <Link href={"https://www.facebook.com/jgecEDC"}>
                    <a>
                      <Facebook style={{ fill: "#4267B2" }} /> Connect with us
                      on Facebook
                    </a>
                  </Link>
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "#E1306C",
                  }}
                >
                  <Link
                    href={"https://www.instagram.com/edc_jgec/"}
                    target="_blank"
                  >
                    <a>
                      <Instagram style={{ fill: "#E1306C" }} /> Connect with us
                      on Instagram
                    </a>
                  </Link>
                </Typography>
              </div>
              {/* <div>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "#1DA1F2",
                  }}
                >
                  <Link href={"https://twitter.com"}>
                    <a>
                      <Twitter style={{ fill: "#1DA1F2" }} /> Connect with us on
                      Twitter
                    </a>
                  </Link>
                </Typography>
              </div> */}
              <div>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "#0A66C2",
                  }}
                >
                  <Link href={"https://www.linkedin.com/company/edc-jgec/"}>
                    <a>
                      <LinkedIn style={{ fill: "#0A66C2" }} /> Connect with us
                      on LinkedIn
                    </a>
                  </Link>
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                p: 5,
                backdropFilter: "blur(10px) ",
                WebkitBackdropFilter: "blur(10px) ",
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {state.succeeded ? (
                <>
                  <Typography variant="body1">
                    Thanks for reaching out! Someone will soon get back to you!
                  </Typography>
                </>
              ) : (
                <>
                  <FormControl
                    sx={{ m: 1, minWidth: "100%" }}
                    component={"form"}
                    variant={"outlined"}
                    onSubmit={handleSubmit}
                  >
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Name"
                      id="name"
                      variant="outlined"
                      name="name"
                    />
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Email"
                      id="email"
                      type="email"
                      name="email"
                      variant="outlined"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Mobile No"
                      type="tel"
                      id="phno"
                      name="phno"
                      variant="outlined"
                    />
                    <StyledTextField
                      sx={{ mb: "10px" }}
                      fullWidth
                      required
                      label="Message"
                      type="text"
                      name="message"
                      id="message"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                    <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
                    <Button
                      variant="contained"
                      color="inherit"
                      type="submit"
                      disabled={state.submitting}
                      fullWidth
                      sx={{ color: "#9f0037" }}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </>
              )}
            </Box>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}
