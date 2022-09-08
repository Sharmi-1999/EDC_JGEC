import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
import { colors } from "../styles/colors";
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import "animate.css";

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
  return (
    <Box>
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
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
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
          />
          <Button
            variant="contained"
            color="inherit"
            fullWidth
            sx={{ color: "#9f0037" }}
          >
            Log In
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
