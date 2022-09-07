import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
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
        <Row>
          <GlassCard>
            <Typography variant="h4" component={"h4"}>
              Our Mission
            </Typography>
            <Typography variant="body1" component={"p"}>
              To help current and aspiring entrepreneurs improve their potential
              and advance society by sharing knowledge and developing an
              entrepreneurial and innovative mindset.
            </Typography>
          </GlassCard>
          <GlassCard>
            <Typography variant="h4" component={"h4"}>
              Our Vision
            </Typography>

            <Typography variant="body1" component={"p"}>
              The vision of EDC JGEC is, “To be a well recognized centre of
              excellence for entrepreneurship development based on quality
              learning and skill development.” In view of the vision, the
              mission statement is, “To foster entrepreneurial thinking,
              promote, facilitate the business knowledge and develop the
              aspiring successful entrepreneurs imbibed with leadership
              qualities using innovative and ethical business practices to make
              global impact". We also aim at developing interpersonality skills
              of our beloved student community.
            </Typography>
          </GlassCard>
        </Row>
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
  backdrop-filter: blur(4px) saturate(200%);
  -webkit-backdrop-filter: blur(4px) saturate(200%);
  background-color: rgba(0, 0, 0, 0.51);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: ${colors.primary};
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
  p{
    text-align: justify;
    width:100%;
    color: ${colors.grey}
  }
  @media (max-width: 1000px) {
    width: 80%;
    min-height: 300px;
  }
`;
