import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "animate.css";
import Loader from "../components/Loader";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="animate__animated animate__lightSpeedInLeft">
        <Typography
          sx={{
            fontSize: "6vw",
          }}
          variant={"h2"}
          fontFamily={"Cloister black"}
        >
          Entreprenuership & Development Cell
        </Typography>
      </div>
      <div className="animate__animated animate__lightSpeedInRight">
        <Typography
          sx={{
            fontSize: "4vw",
          }}
          variant={"h2"}
          fontFamily={"Cloister black"}
        >
          Jalpaiguri Government Engineering College
        </Typography>
      </div>
    </Box>
  );
}
