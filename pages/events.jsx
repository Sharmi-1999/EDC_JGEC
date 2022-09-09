import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
export default function Events() {
  useEffect(() => {
    document.title = "CONTACT | EDC";
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "4vw",
          fontWeight: "bold",
          textShadow: "2px 2px maroon",
          width: "fit-content",
          color: colors.white,
          borderRadius: "10px",
          padding: "0 5%",
          ":first-letter": {
            color: colors.warning,
            fontSize: "5vw",
          },
        }}
        className="animate__animated animate__fadeInLeft"
      >
        Events
      </Typography>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: colors.secondary,
          backgroundImage: `url("/assets/backgrounds/blob-scatter-haikei.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Layout>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card>
              <CardText>
                <Typography variant="h4" component={"h4"} fontWeight="bold">
                  TEDx JGEC
                </Typography>
                <Typography variant="p" component={"p"} fontWeight="bold">
                  TEDx is an international community that celebrates locally
                  driven ideas and elevates them to a global stage. The
                  &lsquo;x&rsquo; in TEDx stands for independently organized TED
                  events, which is a nonprofit organization devoted to spreading
                  ideas usually in the form of short, powerful talks. On 11th
                  February 2019, EDC JGEC organized the first ever TEDx event,
                  for any state run engineering college in West Bengal. We
                  ignited a spark in our community by organizing a day filled
                  with brilliant speakers, thought-provoking ideas and mind
                  blowing conversations. Not only did our audience seek new
                  ideas, but our organizing team also benefitted greatly, as the
                  planning and execution of such an event requires leadership,
                  teamwork and coordination skills, that parallel those required
                  in the business world.
                </Typography>
              </CardText>
              <CardImg>
                <img src="/assets/placeholders/tedx_ayan.jpg" alt="TEDx" />
              </CardImg>
            </Card>
            <Card>
              <CardText>
                <Typography variant="h4" component={"h4"} fontWeight="bold">
                  The Bizz Quiz
                </Typography>
                <Typography variant="p" component={"p"} fontWeight="bold">
                  The Biz Quiz, is an event to test the business knowledge of
                  participants. Stretching across different business-related
                  topics, the quiz will be a test of not just knowledge but also
                  the lateral thinking skills of the participants. The students
                  have shown their outstanding enthusiasm in this event and made
                  it a grand success
                </Typography>
              </CardText>
              <CardImg>
                <img src="/assets/placeholders/bquiz.jpg" alt="TEDx" />
              </CardImg>
            </Card>
            <Card>
              <CardText>
                <Typography variant="h4" component={"h4"} fontWeight="bold">
                  The B-Plan
                </Typography>
                <Typography variant="p" component={"p"} fontWeight="bold">
                  A business plan is a document that defines in detail a
                  company&apos;s objectives and how it plans to achieve its
                  goals. A business plan lays out a written road map for the
                  firm from marketing, financial, and operational standpoints.
                  Both startups and established companies use business plans.
                  EDC was fortunate enough to collaborate with young indians in
                  our technical fest &lsquo;Sristi&rsquo; giving the students an
                  oppurtunity of presenting their B-plans and getting valuable
                  inputs from the investors. The students showed their gracious
                  performance with soaring entrepreneurial thinkings and
                  impressing the investors with their capabilities
                </Typography>
              </CardText>
              <CardImg>
                <img src="/assets/placeholders/bplan.jpg" alt="TEDx" />
              </CardImg>
            </Card>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}

const Card = styled.div`
  width: 60%;
  minwidth: 300px;
  display: flex;
  background-color: #fff;
  flex-direction: row;
  color: #000;
  margin: 20px 0;
  padding: 20px;
  height: 400px;
  box-shadow: rgb(1, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 0, 0, 0.5) -3px -3px 6px 1px inset;
  /*glassmorphism*/
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(17, 25, 40, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h4 {
    color: ${colors.danger};
  }
  p {
    color: ${colors.grey};
  }
  :nth-of-type(even) {
    flex-direction: row-reverse;
  }
  @media (max-width: 1300px) {
    width: 80%;
    flex-direction: column-reverse;
    height: auto;
    minwidth: 300px;
    :nth-of-type(even) {
      flex-direction: column-reverse;
    }
  }
`;
const CardText = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: auto 0;
`;
const CardImg = styled.div`
  flex: 0.4;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    padding: 20px;
    object-fit: cover;
    aspect-ratio: 1/1;
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;
