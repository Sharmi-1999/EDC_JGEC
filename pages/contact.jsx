import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
import { colors } from "../styles/colors";
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { LocationOn, Facebook,Instagram,Twitter, LinkedIn } from "@mui/icons-material"
import "animate.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

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
  useEffect(() => {
    document.title = "CONTACT | EDC";
  }, []);
  return (
    <Box sx={{}}>
      <Typography
        sx={{
          fontSize: "4vw",
          fontWeight: "bold",
          textShadow: "2px 2px maroon",
          width: "fit-content",
          borderRadius: "10px",
          padding: "0 5%",
          ":first-letter": {
            color: colors.warning,
            fontSize: "5vw",
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        Contact
      </Typography>
      <Box sx={{
        backgroundImage: `url("/assets/backgrounds/blob-scatter-haikei.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}>
        <Layout>
          <Box
            sx={{
              minWidth: "100vw",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              p: 7
            }}
          >
            <Box sx={{
              width: "40%",
              // height:"100%",
              p: 5,
              display:"flex",
              flexDirection:"column",
              // alignItems:"center"
              // border:"2px solid blue",
              justifyContent:"space-between",
            }}>
              <div>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
                  <LocationOn /> Address
                </Typography>
                <Typography variant="p" sx={{ marginLeft: "20px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, veniam?
                </Typography>
              </div>
              <div>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "bold" ,color:"#4267B2"}}>
                  <Link href={"https://facebook.com"}>
                  <a>
                  <Facebook  style={{fill:"#4267B2"}}/> Connect with us on Facebook
                  </a>
                  </Link>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "bold",  color:"#E1306C"}}>
                <Link href={"https://instagram.com"} target="_blank">
                  <a>
                  <Instagram  style={{fill:"#E1306C"}}/> Connect with us on Instagram
                  </a>
                  </Link>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "bold" , color:"#1DA1F2" }}>
                <Link href={"https://twitter.com"}>
                  <a>
                  <Twitter style={{fill:"#1DA1F2"}} /> Connect with us on Twitter
                  </a>
                  </Link>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "bold", color:"#0A66C2" }}>
                <Link href={"https://linkedin.com"}>
                  <a>
                  <LinkedIn style={{fill:"#0A66C2"}}/> Connect with us on LinkedIn
                  </a>
                  </Link>
                </Typography>
              </div>
            </Box>
            <Box sx={{
              width: "40%",
              p: 5,
              backdropFilter: "blur(10px) ",
              WebkitBackdropFilter: "blur(10px) ",
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <FormControl
                sx={{ m: 1, minWidth: "100%" }}
                component={"form"}
                variant={"outlined"}
              >
                <StyledTextField
                  sx={{ mb: "10px" }}
                  fullWidth
                  required
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <StyledTextField
                  sx={{ mb: "10px" }}
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                />
                <StyledTextField
                  sx={{ mb: "10px" }}
                  fullWidth
                  required
                  label="Mobile No"
                  type="tel"
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
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="inherit"
                  fullWidth
                  sx={{ color: "#9f0037" }}
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}
