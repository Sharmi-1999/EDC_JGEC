import { signIn } from "next-auth/react";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  Container,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Layout from "../components/Layout";
import { inputLabelClasses } from "@mui/material/InputLabel";
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

export default function Login() {
  useEffect(() => {
    document.title = "LOGIN | EDC";
  }, []);
  const [loginData, setLoginData] = React.useState({});
  const handleLogin = async () => {
    let res = await signIn("credentials", {
      redirect: false,
      email: loginData.email,
      password: loginData.password,
    });
    console.log(res);
  };
  const updateLoginData = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const updateRemember = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.checked };
    });
  };
  return (
    <Layout>
      <Container
        sx={{
          height: "70vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 5,
            width: "55%",
            backdropFilter: "blur(10px) ",
            WebkitBackdropFilter: "blur(10px) ",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.2)",
            //     backdrop-filter: blur(4px) saturate(200%);
            //   -webkit-backdrop-filter: blur(4px) saturate(200%);
            //   background-color: rgba(0, 0, 0, 0.51);
            //   border-radius: 12px;
            //   border: 1px solid rgba(255, 255, 255, 0.125);
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              fontFamily={"'Signika Negative', sans-serif;"}
              align="center"
              sx={{ fontSize: { xs: "30px", md: "3vw", color: "#fff" } }}
            >
              Log In to EDC JGEC
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormControl
              sx={{ m: 1, minWidth: "100%" }}
              component={"form"}
              variant={"outlined"}
            >
              <StyledTextField
                sx={{ mb: "10px" }}
                fullWidth
                required
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                onChange={updateLoginData}
              />
              <StyledTextField
                sx={{ mb: "10px" }}
                fullWidth
                required
                id="password"
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                onChange={updateLoginData}
              />
              <FormControlLabel
                sx={{ mb: "10px", color: "white" }}
                control={
                  <Checkbox
                    id="remember"
                    name="remember"
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": { color: "#fff" },
                      "&.MuiFormControlLabel-label": { color: "white" },
                    }}
                    onChange={updateRemember}
                  />
                }
                label="Remember Me"
              />
              <Button
                variant="contained"
                color="inherit"
                fullWidth
                onClick={handleLogin}
                sx={{ color: "#9f0037" }}
              >
                Log In
              </Button>
            </FormControl>
            <Grid container sx={{ width: "100%" }}>
              <Grid item xs>
                {/* <Link href="#">
                            <Typography sx={{color:"white",textDecoration:"underline", fontWeight:"bold", ":hover":{fontWeight:"bold"}}} >
                            Forgot password?
                            </Typography>
                        </Link> */}
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    color: "white",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    ":hover": { fontWeight: "bold" },
                  }}
                >
                  <Link href="signup">Don&apos;t have an account? Sign Up</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
