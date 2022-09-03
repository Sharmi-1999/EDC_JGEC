import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "animate.css";

import Loader from "../components/Loader";
import styled from "styled-components";
import Link from "next/link";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
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
          backgroundSize: "auto",
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
              color: "#ffffffdd",
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
              color: "#ffffffdd",
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
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "white",
          backgroundImage: `url("/assets/backgrounds/corporate.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <StyledPaper>
          <StyledBox data-aos="flip-up">
            <Typography
              variant="h3"
              sx={{ fontSize: "4vw" }}
              color="maroon"
              gutterBottom
            >
              &gt;&gt; Our Vision
            </Typography>
            <VisionCard>
              <Img src="/assets/placeholders/compass.jpg" />
              <Typography
                variant="p"
                component={"p"}
                sx={{ color: "brown", margin: "auto 0" }}
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
          <StyledBox data-aos="flip-down">
            <Typography
              variant="h3"
              sx={{ fontSize: "4vw" }}
              align="right"
              color="maroon"
              gutterBottom
            >
              How It All Started... &lt;&lt;
            </Typography>
            <HistoryCard>
              <Img src="/assets/placeholders/sticky_notes.jpg" />
              <Typography
                variant="p"
                component="p"
                sx={{ color: "brown", margin: "auto 0" }}
              >
                It all started way back in 2019 when the idea of JOB CREATORS
                instead of JOB SEEKERS sinked into our minds . We explored, grew
                up from a small community of 10 members to a large community of
                300+ members. We have a dedicated core team working behind us
                everyday aiding in the flourishing of the community as well also
                helps us to focus to our objective. In a word we say " No what
                ifs . Let's make it happen."
              </Typography>
            </HistoryCard>
          </StyledBox>
        </StyledPaper>
      </Box>
      <Box
        style={{
          minHeight: "50vh",
          width: "100vw",
          backgroundImage: `url("/assets/backgrounds/mic.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "40px",
        }}
      >
        <Typography
          sx={{
            fontSize: "3vw",
            textShadow: "2px 2px maroon",
            width: "fit-content",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          EVENTS
          <Link href="/events">
            <IconButton
              sx={{
                ml: "20px",
                mt: "-5px",
                borderRadius: "10px",
                backgroundColor: "white",
                ":hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <KeyboardDoubleArrowRight />
            </IconButton>
          </Link>
        </Typography>
        <EventWrapper>
          <EventCard>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <EventImage
                  src="/assets/placeholders/tedx_ayan.jpg"
                  alt="tedx"
                />
              </div>
              <div className="flip-card-back">
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    padding: "20px",
                  }}
                >
                  On 11th February 2019, Entrepreneurship Development Cell, JGEC
                  organized its first ever TEDx in the college campus.
                </Typography>
              </div>
            </div>
          </EventCard>
          <EventCard>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <EventImage src="/assets/placeholders/bquiz.jpg" alt="tedx" />
              </div>
              <div className="flip-card-back">
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    padding: "20px",
                  }}
                >
                  The Biz Quiz, is an event to test the business knowledge of
                  participants.
                </Typography>
              </div>
            </div>
          </EventCard>
          <EventCard>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <EventImage src="/assets/placeholders/bplan.jpg" alt="tedx" />
              </div>
              <div className="flip-card-back">
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    padding: "20px",
                  }}
                >
                  The Business Plan Competition is an event to test the
                  entrepreneurial skills of participants, where they can build
                  and voice for their products in a real-life scenario.
                </Typography>
              </div>
            </div>
          </EventCard>
        </EventWrapper>
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
      width: 100%;
    }
    p{
      text-align: center;
    }
`;
const HistoryCard = styled(VisionCard)`
  flex-direction: row-reverse;
  @media (max-width: 1200px) {
    flex-direction: column;
    Img{
      margin: 20px 0;
      width: 100%;
    }
    p{
      text-align: center;
    }
`;
const StyledPaper = styled(Paper)`
  width: 100vw;
  padding: 20px 30px;
  min-height: 96vh;
  margin: auto;
  border-radius: 0;
  background-color: #f5f5f5bb;
`;
const StyledBox = styled(Box)`
  margin: 25px auto;
`;
const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  `;
const EventCard = styled.div`
  width: 360px;
  height: 400px;
  margin: 10px;
  border-radius: 10px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flip-card-back {
    color: white;
    background-color: #00000040;
    transform: rotateY(180deg);
  }
  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`;
const EventImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Img = styled.img`
  object-fit: cover;
  height: 30vh;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid maroon;
  margin: auto 30px;
  width: 40vh;
`;
