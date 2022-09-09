import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import members from '../data/team.json';
import CardSection from "../components/CardSection";
export default function Team() {
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
        Team
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#fff",
          backgroundImage: `url("/assets/backgrounds/blob-scatter-haikei.svg")`,
          display: "flex",
          flexDirection: "column",
          padding: '20px'
        }}
      >
        <Typography
          sx={{
            fontSize: "2vw",
            fontWeight: "bold",
            textShadow: "2px 2px maroon",
            borderRadius: "10px",
            padding: "0 5%",
            textAlign: 'left',
            ":first-letter": {
              color: colors.warning,
              fontSize: "3.2vw",
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '13vw',
              marginTop: -1,
              borderBottom: '2px solid #f9dd94',
            }

          }}
          className="animate__animated animate__fadeInLeft"
        >
          EDC Member 2k22
        </Typography>

        {members.map((Elem, index) => {
          return (<CardSection Elem={Elem} key={index} />)
        })}
      </Box>
    </Box>
  );
}
