import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import "animate.css";
import HeroCard from "./HeroCard";

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
            fontSize: { xs: "30px", md: "3vw", fontWeight: "bold" },
            fontWeight: "bold",
            width: "fit-content",
            color: colors.white,
            textShadow: `1px 1px ${colors.grey}`,
            borderRadius: "10px",
            padding: "0 5%",
            ":first-letter": {
              // color: colors.danger,
              fontSize: { xs: "40px", md: "4vw", fontWeight: "bold" },
            },
            "&::after": {
              content: '""',
              display: "block",
              width: "50%",
              marginTop: -1,
              marginBottom: 4,
              borderTop: `5px solid ${colors.danger}`,
            },
          }}
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
            flexDirection: { xs: "column", md: "row" },
            // flexWrap: "wrap",
          }}
        >
          {Object.keys(props.Elem).map((elem) => {
            return (
              <>
                {props.Elem[elem].map((member, ind) => {
                  return (
                    // <Card
                    //   imageUrl={member.img}
                    //   memberName={member.name}
                    //   githubLink={member.githubLink}
                    //   emailLink={member.mail}
                    //   facebookLink={member.fb}
                    //   key={ind}
                    //   index={ind}
                    // />
                    <HeroCard
                      img={member.img}
                      name={member.name}
                      mail={member.mail}
                      fb={member.fb}
                      lkdin={member.linkedin}
                      ig={member.ig}
                      key={ind}
                      index={ind}
                    />
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
