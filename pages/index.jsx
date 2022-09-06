import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "animate.css";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Link from "next/link";
import { KeyboardDoubleArrowRight, Scale } from "@mui/icons-material";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <Box
        sx={{
          minHeight: {xs:"calc(100vh - 86px)",md:"calc(100vh - 76px)"},
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="animate__animated animate__fadeIn">
          <Typography
            sx={{
              fontSize: "6vw",
              textShadow: "6px 2px maroon",
              color: colors.white,
            }}
            variant={"h2"}
            fontFamily={"Cloister black"}
          >
            Entreprenuership & Development Cell
          </Typography>
        </div>
        <div className="animate__animated animate__fadeIn">
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
          <StyledBox data-aos="fade-in">
            <Typography
              variant="h3"
              sx={{ fontSize: "4vw", fontWeight: "bold" }}
              gutterBottom
              color={colors.primary}
            >
              What is EDC ?
            </Typography>
            <RowCard>
              <Img src="/assets/placeholders/compass.jpg" />
              <Typography
                variant="p"
                component={"p"}
                color={colors.primary}
                align="justify"
                sx={{ margin: "auto 0", fontWeight: "bold" }}
              >
                Right from infusing the spirit of entrepreneurship, to providing
                an excellent mentorship throughout the journey, EDC JGEC
                believes, that every blooming entrepreneural idea will blossom
                into a success story. We have an unrivalled capacity to incubate
                innovations and foster real world solutions. I aim to carry this
                forward and contribute substantially to the entrepreneurial
                growth in North Bengal.
              </Typography>
            </RowCard>
          </StyledBox>
          <StyledBox data-aos="fade-in">
            <Typography
              variant="h3"
              sx={{ fontSize: "4vw", fontWeight: "bold" }}
              align="right"
              color={colors.primary}
              gutterBottom
            >
              Why is EDC important?
            </Typography>
            <RowRevCard>
              <Img src="/assets/placeholders/sticky_notes.jpg" />
              <Typography
                variant="p"
                component="p"
                color={colors.primary}
                sx={{ margin: "auto 0", fontWeight: "bold" }}
              >
                Creativity, professionalism, risk-taking, passion, social skills
                are some of the characteristics that define an entrepreneur. EDC
                JGEC is about this and much more. We not only provide a platform
                but create a perfect environment to hone and sharpen the
                entrepreneurial genes in every aspiring heart. I, along with my
                team, aim to create history of developing entrepreneurial minds
                of the highest caliber.
              </Typography>
            </RowRevCard>
          </StyledBox>
          <StyledBox data-aos="fade-in">
            <Typography
              variant="h3"
              sx={{ fontSize: "4vw", fontWeight: "bold" }}
              align="left"
              color={colors.primary}
              gutterBottom
            >
              How It All Started
            </Typography>
            <RowCard>
              <Img src="/assets/placeholders/sticky_notes.jpg" />
              <Typography
                variant="p"
                component="p"
                color={colors.primary}
                sx={{ margin: "auto 0", fontWeight: "bold" }}
              >
                It all started way back in 2019 when the idea of JOB CREATORS
                instead of JOB SEEKERS sinked into our minds . We explored, grew
                up from a small community of 10 members to a large community of
                300+ members. We have a dedicated core team working behind us
                everyday aiding in the flourishing of the community as well also
                helps us to focus to our objective. In a word we say " No what
                ifs . Let's make it happen."
              </Typography>
            </RowCard>
          </StyledBox>
        </StyledPaper>
      </Box>
      <Box
        style={{
          minHeight: "50vh",
          width: "100vw",
          padding: "40px",
        }}
      >
        <Typography
          sx={{
            fontSize: "3vw",
            fontWeight: "bold",
            textShadow: "2px 2px maroon",
            width: "fit-content",
            borderRadius: "10px",
            padding: "10px",
            ":first-letter": {
              color: colors.warning,
              fontSize: "4vw",
            },
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
                  transform: "scale(1.1)",
                  transition: "all 1s",
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
const RowCard = styled.div`
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
const RowRevCard = styled(RowCard)`
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
  border: 5px solid white;
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
    z-index: -1;
  }
  &:hover .flip-card-back {
    z-index: 1;
    transition: z-index 0.5s;
  }
  &:hover .flip-card-front {
    opacity: 0.3;
    transform: scale(1.1);
    transition: all 0.5s;
    overflow: hidden;
  }
`;
const EventImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Img = styled.img`
  object-fit: cover;
  height: 30vh;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: auto 30px;
  width: 40vh;
`;
