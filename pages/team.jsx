import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import data from "../data/team.json";
import CardSection from "../components/CardSection";
export default function Team() {
  console.log(data);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
          fontWeight: "bold",
          textShadow: "2px 2px maroon",
          width: "fit-content",
          color: colors.white,
          borderRadius: "10px",
          padding: "0 5%",
          ":first-letter": {
            color: colors.warning,
            fontSize: "4vw",
          },
          "&::after": {
            content: '""',
            display: "block",
            width: "50%",
            marginTop: -1,
            marginBottom: 4,
            borderTop: `5px solid ${colors.warning}`,
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
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        {/* <Typography
          sx={{
            fontSize: "2vw",
            fontWeight: "bold",
            textShadow: "2px 2px maroon",
            borderRadius: "10px",
            padding: "0 5%",
            textAlign: "left",
            ":first-letter": {
              color: colors.warning,
              fontSize: "3.2vw",
            },
          }}
          className="animate__animated animate__fadeInLeft"
        >
          EDC Member 2k22
        </Typography> */}

        {data.map((Elem, index) => {
          return <CardSection Elem={Elem} key={index} />;
        })}
      </Box>
    </Box>
  );
}
