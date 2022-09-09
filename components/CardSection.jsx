import { Typography, Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "styled-components";
import "animate.css";
import Card from "./Card";

const CardSection = (props) => {
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
                    gap:'20px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2vw",
                        fontWeight: "bold",
                        textShadow: "2px 2px maroon",
                        width: "fit-content",
                        borderRadius: "10px",
                        padding: "1% 5%",
                        '&::after': {
                            content: '""',
                            height: '1px',
                            width: '45%',
                            backgroundColor: '#f9dd94',
                            position: 'absolute',
                            bottom: '.5em',
                            left: '50%',
                            transform: 'translate(-50%)',

                        }
                    }}
                    className="animate__animated animate__fadeInLeft"
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
                        flexDirection: "row",
                        flexWrap: 'wrap',
                    }}>
                    {Object.keys(props.Elem).map((elem) => {
                        return <>{props.Elem[elem].map((member, ind) => {
                            return (<>
                                <Card imageUrl={member.imageUrl} memberName={member.memberName} githubLink={member.githubLink} emailLink={member.emailLink} facebookLink={member.facebookLink} key={ind} />
                            </>)
                        })
                        }
                        </>
                    })}
                </Box>
            </Box>
        </>
    )
}

export default CardSection;