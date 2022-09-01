import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "animate.css";

import Loader from "../components/Loader";
import styled from "styled-components";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: `url("/assets/backgrounds/nasa_earth.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="animate__animated animate__lightSpeedInLeft">
          <Typography
            sx={{
              fontSize: "6vw",
              textShadow: "6px 2px maroon",
            }}
            variant={"h2"}
            fontFamily={"Cloister black"}
          >
            Entreprenuership & Development Cell
          </Typography>
        </div>
        <div className="animate__animated animate__lightSpeedInRight">
          <Typography
            sx={{
              fontSize: "4vw",
              textShadow: "2px 2px maroon",
            }}
            variant={"h2"}
            fontFamily={"Cloister black"}
          >
            Jalpaiguri Government Engineering College
          </Typography>
        </div>
      </Box>
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          padding: "50px",
        }}
      >
        <Typography variant="h1" sx={{
        }} fontFamily={"Comic Sans MS"} color="maroon">Our Vision</Typography>
        <VisionCard>
          <Img src="/assets/placeholders/compass.jpg" />
        </VisionCard>
      </Box>
    </>
  );
}
const VisionCard = styled.div`
  width: 80%;
  margin: auto;
  minwidth: 360px;
  height: 30vh;
  background-color: #f5f5f5;
`;
const Img = styled.img`
  height: 100%;
  width: 20%;
  object-fit: cover;
`;
