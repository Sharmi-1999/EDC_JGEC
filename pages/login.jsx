import { signIn } from "next-auth/react";
import React from "react";
import { Container, FormControl, FormControlLabel,Checkbox, TextField,Box, Typography,Button } from "@mui/material";

export default function SignUp() {
    const [loginData, setLoginData] = React.useState({})
    const handleLogin = () => {}
    const updateLoginData =(e)=>{
        setLoginData((prev)=>{return {...prev,[e.target.id]:e.target.value}})
    }
    console.log(loginData);
    return (
        <Container sx={{ mt: "100px", display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column", border:"2px solid black"}}>
            <Box>
                <Typography fontFamily={"'Signika Negative', sans-serif;"} sx={{fontSize:{xs:'30px',md:'45px'}}}>
                    Log In to EDC JGEC
                </Typography>
            </Box>
            <FormControl
                sx={{ m: 1, minWidth: "50%" }}
                component={"form"}
                variant={"outlined"}
            >
                <TextField sx={{mb:"10px"}} fullWidth required id="email" label="Email" variant="outlined" onChange={updateLoginData}/>
                <TextField sx={{mb:"10px"}} fullWidth required id="password" label="Password" type="password" variant="outlined" onChange={updateLoginData} />
                <FormControlLabel sx={{mb:"10px"}} control={<Checkbox id="remember" onChange={updateLoginData}/>} label="Remember Me"/>
                <Button variant="contained" fullWidth onClick={handleLogin}>Log In</Button>
            </FormControl>
        </Container>
    )
}

