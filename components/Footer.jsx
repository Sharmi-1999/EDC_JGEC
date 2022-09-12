import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../styles/colors";
export default function Footer() {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          minHeight: "300px",
          backgroundColor: colors.secondary,
          backgroundImage: `url("/assets/backgrounds/polygon-scatter-haikei.svg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover',
          backgroundPosition: 'fixed',
          display: "flex",
          padding:'20px',
          justifyContent: "space-between",
          "@media (max-width: 900px)": {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            flex: "0.6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            component={"h5"}
            color={colors.lightGrey}
          >
            Activities.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "0.4",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.1968074731185!2d88.70156541484438!3d26.545944683286873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47bce687f169d%3A0x4152036d0d736d37!2sJalpaiguri%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1662266415565!5m2!1sen!2sin"
            height="250"
            width="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "30px",
          backgroundColor: colors.darkGrey,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#fff" }}>
          Entrepreneurship Development Cell, Jalpaiguri Government Engineering
          College &nbsp;&#169;&nbsp;2022
        </Typography>
      </Box>
    </Box>
  );
}
