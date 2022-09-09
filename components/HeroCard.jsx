import { Box, Hidden, IconButton, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import { Facebook, Google, Instagram, LinkedIn } from "@mui/icons-material";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  :hover .ico {
    visibility: visible;
    transition: all 0.5s ease-in-out;
  }
`;
const Actions = styled.div`
  position: absolute;
  top: 70%;
  width: 80%;
  margin: 0 10%;
  display: flex;
  transition: all 0.5s ease-in-out;
  transition-delay: 2s;
  justify-content: space-evenly;
  .ico {
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    color: ${colors.white};
  }
  .ico:hover {
    color: ${colors.info};
    transform : scale(1.3);
  }
`;
const Img = styled.img`
  width: 95%;
  z-index: 3;
  height: 95%;
  margin: 2.5%;
  border-radius: 12px;
  transition: all 0.5s ease-in-out;
`;
function handleHref(uri) {
  window.open(uri);
}
export default function HeroCard(props) {
  return (
    <Card>
      <Box
        sx={{
          width: "250px",
          marginBottom: '40px',
          padding: 0,
          height: "250px",
          backdropFilter: `blur(10px)`,
          backgroundColor: `rgba(10, 10, 10, 0.2)`,
          borderRadius: `12px`,
          zIndex: "0",
          border: `1px solid rgba(255, 255, 255, 0.2)`,
          transition: "all 0.5s ease-in-out",
          ":hover": {
            backgroundColor: `rgba(255, 255, 255, 0.1)`,
            border: `4px solid ${colors.info}`,
            Img: {
              transform: `translateY(-70px)`,
              borderRadius: `50%`,
              border: `4px solid ${colors.darkGrey}`,
              transition: "all 0.5s ease-in-out",
            },
            borderRadius: `50%`,
          },
        }}
      >
        <Actions>
          <IconButton className="ico" onClick={() => handleHref(props.fb)}>
            <Facebook />
          </IconButton>
          <IconButton className="ico" onClick={() => handleHref(props.lkdin)}>
            <LinkedIn />
          </IconButton>
          <IconButton className="ico">
            <Instagram onClick={() => handleHref(props.ig)} />
          </IconButton>
        </Actions>
        <Img src={props.img} alt="avatar" />
      </Box>
      <Typography
        className="heroName"
        variant="h6"
        component="h6"
        align="center"
      >
        {props.name}
      </Typography>
    </Card>
  );
}
