import { Typography, Box } from "@mui/material";
import Link from "next/link";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
const Card = (props) => {
  //   alert(props.index)
  const [outerCard, setOuterCard] = useState(false);
  const cardHover = () => {
    setOuterCard(true);
  };
  const cardHoverCancel = () => {
    setOuterCard(false);
  };
  return (
    <>
      <Box sx={{
          width: "300px",
          height: "300px",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          transform: outerCard ? "scale(1.01)" : "scale(1)",
        }}
        onMouseLeave={cardHoverCancel}
      >
        <Box
          sx={{
            width: "21%",
            height: "200px",
            backgroundColor: "#1f424dd1",
            justifyContent: "space-evenly",
            alignItems: "center",
            display: "flex",
            visibility: outerCard ? "visible" : "hidden",
            flexDirection: "column",
            borderRadius: "8px 0 0 8px",
            boxShadow: "-2px -2px 12px #00000056",
            backdropFilter: "blur(8px)",
            padding: "20px",
            transition: "all .3s ease-in-out",
          }}
        >
          <Link href={props.githubLink || ""}>
            <GitHubIcon
              fontSize="large"
              sx={{
                cursor: "pointer",
                fill: "#f7c600",
                filter: "drop-shadow(3px 4px 2px rgb(0 0 0 / 0.4))",
                "&:hover": { transform: "scale(1.2)", fill: "#fff" },
              }}
            />
          </Link>
          <Link href={props.emailLink || ""}>
            <EmailIcon
              fontSize="large"
              sx={{
                cursor: "pointer",
                fill: "#f7c600",
                filter: "drop-shadow(3px 4px 2px rgb(0 0 0 / 0.4))",
                "&:hover": { transform: "scale(1.2)", fill: "#fff" },
              }}
            />
          </Link>
          <Link href={props.facebookLink || ""}>
            <FacebookIcon
              fontSize="large"
              sx={{
                cursor: "pointer",
                fill: "#f7c600",
                filter: "drop-shadow(3px 4px 2px rgb(0 0 0 / 0.4))",
                "&:hover": { transform: "scale(1.2)", fill: "#fff" },
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            backgroundColor: "#00000057",
            justifyContent: "space-evenly",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px #000",
            padding: "20px",
          }}
          onMouseEnter={cardHover}
        >
          <Image
            src={props.imageUrl}
            width="200"
            height="180"
            alt=""
            style={{ borderRadius: "50%" }}
          ></Image>
          <Typography
            sx={{
              fontSize: "1.5vw",
              fontWeight: "bold",
              width: "fit-content",
              color: "#7fc4f9",
              textShadow: "1px 1px maroon",
            }}
          >
            {props.memberName}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Card;
