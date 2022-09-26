import { Typography, Box } from "@mui/material";
import { default as ReactGallery } from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { colors } from "../styles/colors";
import "animate.css";
import Layout from "../components/Layout";
import React, { useState, useCallback, useEffect } from "react";
import images from "../data/gallery.json";
function randomDim() {
  let dims = [
    { width: 1, height: 1 },
    { width: 4, height: 3 },
    { width: 3, height: 2 },
    { width: 3, height: 4 },
    { width: 16, height: 9 },
    { width: 5, height: 3 },
  ];
  return dims[Math.floor(Math.random() * dims.length)];
}
export default function Gallery() {
  useEffect(() => {
    document.title = "GALLERY | EDC";
    for (let i = 0; i < images.length; i++) {
      let dim = randomDim();
      images[i].width = dim.width;
      images[i].height = dim.height;
    }
  }, []);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
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
            fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
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
              width: "100vw",
              padding: "40px",
            }}
          >
            <ReactGallery photos={images} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={images.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}
