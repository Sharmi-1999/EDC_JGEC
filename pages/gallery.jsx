import { Typography, Box, Modal } from "@mui/material";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import React from "react";
import items from "../data/gallery.json";
export default function Events() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const options = {

    "layoutParams": {
      "structure": {
        "galleryLayout": 0
      },
      "groups": {
        "groupSize": 1
    },
      "info": {
        "placement": ""
      }
    },
    "behaviourParams": {
      "item": {
        "content": {
          "hoverAnimation": "ZOOM_IN",
          "placementAnimation": "SLIDE"
        },
        "clickAction": "ACTION",
        "overlay": {
          "hoveringBehaviour": "NEVER_VISIBLE"
        }
      },
      "gallery": {
        "scrollAnimation": "SLIDE_UP"
      }
    },
    "stylingParams": {
      "itemBorderRadius": 7
    }

  };
  const container = {
    width: window.innerWidth - 100,
    height: window.innerHeight - 100,
  };
  const eventsListener = (eventName, eventData) => {
    // console.log({ eventName, eventData });
    if (eventName === "ITEM_CLICKED") {
      setModalImage(eventData.url);
      setModalOpen(true);
    }
  };

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;
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
        Gallery
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
        <Box
          sx={{
            margin: "auto",
            padding: "40px",
          }}
        >
          <ProGallery
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
          />
        </Box>
      </Box>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box>
          <img
            src={modalImage}
            alt={"Focus Image"}
            style={{ margin: "auto" }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
