import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { colors } from "../styles/colors";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xzbwdzwy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{ width: "60%", minWidth: "360px" }}>
        <div>
          <TextField
            id="email"
            type="email"
            name="email"
            variant="filled"
            label="Email"
            // color={colors.white}
            required={true}
            fullWidth
            sx={{
              backgroundColor: colors.lightGrey,
              color: colors.primary,
              margin: "5px",
              borderRadius: "10px",
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <TextField
            id="message"
            name="message"
            multiline
            maxRows={4}
            aria-label="message"
            variant="filled"
            label="Message"
            required={true}
            fullWidth
            sx={{
              backgroundColor: colors.lightGrey,
              color: colors.primary,
              margin: "5px",
              borderRadius: "10px",
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div>
          <Button
            type="submit"
            size="large"
            variant="contained"
            className="Button"
            disabled={state.submitting}
            fullWidth
            sx={{
              backgroundColor: colors.primary,
              margin: "5px",
              borderRadius: "10px",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
export default function Footer() {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          minHeight: "300px",
          backgroundColor: colors.secondary,
          display: "flex",
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
            GET IN TOUCH
          </Typography>
          <ContactForm />
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
        <Typography sx={{color:"#fff"}}>
          Entrepreneurship & Development Cell, Jalpaiguri Government Engineering
          College &nbsp;&#169;&nbsp;2022
        </Typography>
      </Box>
    </Box>
  );
}
