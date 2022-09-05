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
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#5F2222",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23B10C0C'/%3E%3Cstop offset='1' stop-color='%235F2222'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23881717'/%3E%3Cstop offset='1' stop-color='%235F2222'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(380 0)'%3E%3Cg %3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-93.6 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.18' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
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
          backgroundColor: "#5F2222",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23B10C0C'/%3E%3Cstop offset='1' stop-color='%235F2222'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23881717'/%3E%3Cstop offset='1' stop-color='%235F2222'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(380 0)'%3E%3Cg %3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-93.6 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.18' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
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
