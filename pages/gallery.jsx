import { Typography, Box, Modal } from "@mui/material";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import items from "../data/gallery.json";
export default function Gallery() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 0,
      },
      groups: {
        groupSize: 1,
      },
      info: {
        placement: "",
      },
    },
    behaviourParams: {
      item: {
        content: {
          hoverAnimation: "ZOOM_IN",
          placementAnimation: "SLIDE",
        },
        clickAction: "ACTION",
        overlay: {
          hoveringBehaviour: "NEVER_VISIBLE",
        },
      },
      gallery: {
        scrollAnimation: "SLIDE_UP",
      },
    },
    stylingParams: {
      itemBorderRadius: 7,
    },
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
  useEffect(() => {
    document.title = "CONTACT | EDC";
  }, []);
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
        <Layout>
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
        </Layout>
      </Box>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
