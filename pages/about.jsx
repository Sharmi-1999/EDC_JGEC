import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useEffect } from "react";
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
export default function About() {
  useEffect(() => {
    document.title = "ABOUT | EDC";
  }, []);
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
          color: colors.white,
          ":first-letter": {
            color: colors.warning,
            fontSize: "5vw",
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "50%",
            marginTop: -2,
            marginBottom: 4,
            borderBottom: `5px solid ${colors.warning}`,
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        About Us
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
      >
        <Layout>
          <Row>
            <GlassCard>
              <Typography variant="h4" component={"h4"}>
                Our Mission
              </Typography>
              <Typography variant="body1" component={"p"}>
                To help current and aspiring entrepreneurs improve their
                potential and advance society by sharing knowledge and
                developing an entrepreneurial and innovative mindset.
              </Typography>
            </GlassCard>
            <GlassCard>
              <Typography variant="h4" component={"h4"}>
                Our Vision
              </Typography>

              <Typography variant="body1" component={"p"}>
                The vision of EDC JGEC is, &ldquo;To be a well recognized centre
                of excellence for entrepreneurship development based on quality
                learning and skill development.&rdquo; In view of the vision,
                the mission statement is, &ldquo;To foster entrepreneurial
                thinking, promote, facilitate the business knowledge and develop
                the aspiring successful entrepreneurs imbibed with leadership
                qualities using innovative and ethical business practices to
                make global impact&rdquo;. We also aim at developing
                interpersonality skills of our beloved student community.
              </Typography>
            </GlassCard>
          </Row>
          <Row>
            <GlassRowCard>
              <Typography gutterBottom variant="h4" component={"h4"}>
                Objectives
              </Typography>
              {objectives.map((objective, index) => {
                return (
                  <StepCard key={index}>
                    <AdjustRounded
                      fontSize="large"
                      sx={{
                        position: "relative",
                        top: "25%",
                        backgroundColor: colors.warning,
                        borderRadius: "50%",
                        left: "-20px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component={"h6"}
                      color={colors.grey}
                    >
                      {objective}
                    </Typography>
                  </StepCard>
                );
              })}
            </GlassRowCard>
          </Row>
          <Row>
            <GlassRowCard>
              <Typography gutterBottom variant="h4" component={"h4"}>
                Initiatives
              </Typography>
              {initiatives.map((val, index) => {
                return (
                  <StepCard2 key={index}>
                    <Typography
                      variant="h6"
                      align="right"
                      component={"h6"}
                      color={colors.warning}
                    >
                      {val.title}
                      <br />
                      <Typography variant="body1" align="right" component={"p"}>
                        {val.desc}
                      </Typography>
                    </Typography>

                    <CheckCircle
                      fontSize="large"
                      sx={{
                        position: "relative",
                        top: "25%",
                        backgroundColor: colors.warning,
                        borderRadius: "50%",
                        right: "-20px",
                      }}
                    />
                  </StepCard2>
                );
              })}
            </GlassRowCard>
          </Row>
        </Layout>
      </Box>
    </Box>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const GlassCard = styled.div`
  width: 40%;
  min-height: 400px;
  margin: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(10, 10, 10, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: ${colors.danger};
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
  p {
    text-align: justify;
    width: 100%;
    color: ${colors.grey};
    font-family: "Baloo 2", cursive;
  }
  @media (max-width: 1000px) {
    width: 80%;
    min-height: 300px;
  }
`;
const GlassRowCard = styled(GlassCard)`
  width: 88%;
`;
const StepCard = styled.div`
  width: 90%;
  border-left: 5px solid ${colors.danger};
  min-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  h6 {
    margin-left: 20px;
    line-height: normal;
    width: 100%;
    // margin: auto;
  }
  :last-of-type {
    border-left: 5px solid transparent;
  }
`;
const StepCard2 = styled.div`
  width: 90%;
  border-right: 5px solid ${colors.danger};
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  h6 {
    margin-right: 20px;
    line-height: normal;
    width: 100%;
    // margin: auto;
  }
  p {
    margin-right: 30px;
    line-height: normal;
    width: 100%;
    text-align: right;
    color: ${colors.grey};
  }
  :last-of-type {
    border-right: 5px solid transparent;
  }
`;
