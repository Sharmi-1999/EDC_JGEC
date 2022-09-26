/********************************* 
 *                               *
 *                               *
 *      Dummy Sign Up            *
 *                               *
 *                               *
 *                               *
 * *******************************/

import { signIn } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { Container, FormControl, FormControlLabel, Checkbox, TextField, Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";


const StyledTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "white"
    },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "white"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "white"
    },
    [`& .${outlinedInputClasses.input}`]: {
        color: "white"
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
        color: "white"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
        color: "white"
    },
    [`& .${inputLabelClasses.outlined}`]: {
        color: "white"
    },
    [`&:hover .${inputLabelClasses.outlined}`]: {
        color: "white"
    },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
        color: "white"
    }
});


export default function SignUp() {
    const [signupData,setSignupData] = React.useState({});
    const updateSignupData = (e) => {
        setSignupData({...signupData,[e.target.name]:e.target.value})
    }
    const handleSignUp = ()=>{
        if(signupData.password === signupData.cpassword && signupData.password !==""){
            fetch('/api/user/signup', {
                method: 'POST',
                headers: {
                    "Accept": "application/json"
                },
                body: new URLSearchParams(`name=${signupData.name}&email=${signupData.email}&password=${signupData.password}`)
            })
                .then(res => {
                    console.log(res.status);
                    if (res.status === 201) {
                        signIn('credentials', { callbackUrl: "/", email: signupData.email, password: signupData.password })
                    }
                    return res.json()
                }).then(res => console.log(res))
        }
    }

    return (
        <Container sx={{ height: "70vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column" }}>
            <Box>
                <Typography fontFamily={"'Signika Negative', sans-serif;"} sx={{ fontSize: { xs: '30px', md: '5vw', color: "#fff" } }}>
                    Create Your Account
                </Typography>
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <FormControl
                    sx={{ m: 1, minWidth: "50%" }}
                    component={"form"}
                    variant={"outlined"}
                >
                    <StyledTextField sx={{ mb: "10px" }} fullWidth required id="name" label="Full Name" variant="outlined" name="name" onChange={updateSignupData} />
                    <StyledTextField sx={{ mb: "10px" }} fullWidth required id="email" label="Email" variant="outlined" name="email" onChange={updateSignupData} />
                    <StyledTextField sx={{ mb: "10px" }} fullWidth required id="password" label="Password" type="password" name="password" variant="outlined" onChange={updateSignupData} />
                    <StyledTextField sx={{ mb: "10px" }} fullWidth required id="cpassword" label="Confirm Password" type="password" name="cpassword" variant="outlined" onChange={updateSignupData} />
                    <Button variant="contained" color="inherit" fullWidth onClick={handleSignUp} sx={{ color: "#9f0037" }}>Sign Up</Button>
                </FormControl>
            </Box>
        </Container>
    )
}