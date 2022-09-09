import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import Card from "./Card";

const CardSection = (props) => {
  console.log(props.Elem);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "30vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2vw",
            fontWeight: "bold",
            textShadow: `2px 2px ${colors.primary}`,
            width: "fit-content",
            borderRadius: "10px",
            padding: "10px 0",
            "&::after": {
              content: '""',
              height: "4px",
              width: "60%",
              backgroundColor: `${colors.warning}`,
              position: "absolute",
              bottom: ".5em",
              left: "0",
            },
          }}
          className="animate__animated animate__fadeInLeft"
        >
          {Object.keys(props.Elem)[0]}
        </Typography>
        <Box
          sx={{
            width: "100%",
            minHeight: "30vh",
            justifyContent: "space-evenly",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(props.Elem).map((elem) => {
            return (
              <>
                {props.Elem[elem].map((member, ind) => {
                  return (
                    <>
                      <Card
                        imageUrl={member.img}
                        memberName={member.name}
                        githubLink={member.githubLink}
                        emailLink={member.mail}
                        facebookLink={member.fb}
                        key={ind}
                      />
                    </>
                  );
                })}
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default CardSection;
