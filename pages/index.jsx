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
          minHeight: "100vh",
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
          backgroundImage: `url("/assets/backgrounds/corporate.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <StyledPaper data-aos="zoom-in">
          <StyledBox data-aos="flip-up">
            <Typography
              variant="h3"
              sx={{}}
              fontFamily={"Comic Sans MS"}
              color="maroon"
            >
              >> Our Vision
            </Typography>
            <VisionCard>
              <Img src="/assets/placeholders/compass.jpg" />
              <Typography
                variant="h6"
                sx={{ color: "brown" }}
                fontFamily={"Comic Sans MS"}
              >
                The vision of EDC JGEC is, “To be a well recognized center of
                excellence for entrepreneurship development based on quality
                learning and skill development.” To support and guide each
                blooming entrepreneurial idea through a pathway of opportunities
                and enhancement is what we follow. In view of the vision, the
                mission statement is, “To foster entrepreneurial thinking,
                promote, facilitate the business knowledge and develop the
                aspiring successful entrepreneurs imbibed with leadership
                qualities using innovative and ethical business practices to
                make global impact" . We also aim at developing interpersonality
                skills of our beloved student community.
              </Typography>
            </VisionCard>
          </StyledBox>
          <hr/>
          <StyledBox data-aos="flip-up">
            <Typography
              variant="h3"
              sx={{}}
              fontFamily={"Comic Sans MS"}
              color="maroon"
            >
              >> How It All Started...
            </Typography>
            <VisionCard>
              <Img src="/assets/placeholders/sticky_notes.jpg" />
              <Typography
                variant="h6"
                sx={{ color: "brown" }}
                fontFamily={"Comic Sans MS"}
              >
                It all started way back in 2019 when the idea of JOB CREATORS
                instead of JOB SEEKERS sinked into our minds . We explored, grew
                up from a small community of 10 members to a large community of
                300+ members. We have a dedicated core team working behind us
                everyday aiding in the flourishing of the community as well also
                helps us to focus to our objective. In a word we say " No what
                ifs . Let's make it happen "
              </Typography>
            </VisionCard>
          </StyledBox>
        </StyledPaper>
      </Box>
    </>
  );
}
const VisionCard = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  minwidth: 360px;
  @media (max-width: 1200px) {
    flex-direction: column;
    Img{
      margin: 20px 0;
    }
`;
const StyledPaper = styled(Paper)`
  width: 96vw;
  min-height: 96vh;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5bb;
`;
const StyledBox = styled(Box)`
margin: 25px auto;
`;
const Img = styled.img`
  object-fit: cover;
  height: 30vh;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid maroon;
  margin: auto 30px;
`;
