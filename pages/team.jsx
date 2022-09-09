import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
export default function Team() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "4vw",
          fontWeight: "bold",
          textShadow: "2px 2px maroon",
          width: "fit-content",
          color: colors.white,
          borderRadius: "10px",
          padding: "0 5%",
          ":first-letter": {
            color: colors.warning,
            fontSize: "5vw",
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        Team
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      ></Box>
    </Box>
  );
}
