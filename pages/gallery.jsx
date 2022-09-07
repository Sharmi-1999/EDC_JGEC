import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import { CheckCircle, AdjustRounded } from "@mui/icons-material";
const objectives = [
  "To inculcate the entrepreneurial culture into their minds",
  "To organize Entrepreneurship Motivation Programs",
  "Competitions to unleash the entrepreneurial potential among students",
  "To aid them in initiation of industries and Business",
  "Collaborate with entrepreneurship promotion agencies and organizations ",
  "Leverage good student projects ",
  "Product Identification ",
  "Provide escort service for obtaining loan and other approvals.",
];
const initiatives = [
  {
    title: "Personality development",
    desc: "We mentor students and enhance skills such as public speaking, event management,  teamwork,  leadership etc which would help them in making their career.",
  },
  {
    title: "Group discussion",
    desc: "Group discussions are often held in between the core team to filtrate the  ongoing issues and maintain the smooth flow of work and sync up meets are held to check on the progress of the events.",
  },
  {
    title: "Business terms",
    desc: "We also keep updating students about new and upcoming business terms and strategies which help in gaining knowledge as well as help them in extending their horizon of knowledge in the world of business and entrepreneurship.",
  },
  {
    title: "Session for marketing and business",
    desc: "Several classes are held for the students to aspire their young minds and bring out the exceptional entrepreneur in them which would help them in launching their product.",
  },
  {
    title: "Know Yourself",
    desc: "Guiding sessions are held to dig out the innovation from the students and giving them a platform to pitch their ideas in front of the investors",
  },
];
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
        Gallery
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          backgroundColor: "#fff",
          backgroundImage: `url("/assets/backgrounds/blob-scatter-haikei.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      ></Box>
    </Box>
  );
}
