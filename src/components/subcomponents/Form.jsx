import React, { useRef } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'




export default function Form() {
    const navigate = useNavigate();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vbbtpmo', 'template_lczaobc', form.current, 'mEWXjc3FjpuoPVZg2')
            .then((result) => {
                console.log(result.text);
                navigate('/')
                navigate('/contact%20us')
            }, (error) => {
                console.log(error.text);
            });
    };

    const theme = createTheme()

    theme.typography.h4 = {
        margin: '30px auto 15px auto',
        fontFamily: ['Lota', 'serif'].join(),
        fontSize: '30px',
        color: '#05361F',

    }

    theme.typography.body1 = {
        fontFamily: ['Lota', 'serif'].join(),
        color: '#05361F',
        fontSize: '17px',
        margin: '20px auto 3px auto',
        '@media screen and (max-width: 1024px)': {
            textAlign: 'center'
        }
    }

    return (
        <>
            <Typography align='center' theme={theme} variant="h4">Drop in your queries</Typography>
            <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={2}>
                    <Grid item md={5.3} xs={12}>
                        <Typography theme={theme} variant="body1">First Name</Typography>
                        <input name="firstName" style={{ paddingLeft: 'auto' }} placeholder='First Name' size="28" type="text" required />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography theme={theme} variant="body1">Last Name</Typography>
                        <input name="lastName" placeholder='Last Name' size="30" type="text" required />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <Typography theme={theme} variant="body1">Address</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <textarea name="address" placeholder='Area, City' rows="6" cols="65"></textarea>
                        {/* 65 */}
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5.3}>
                        <Typography theme={theme} variant="body1">Email Address</Typography>
                        <input name="email" placeholder='Email' size="28" type="email" required />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography theme={theme} variant="body1">Phone Number</Typography>
                        <input name="phNumber" placeholder='Phone Number' size="30" type="number" min="1000000000" max='9999999999' required />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography theme={theme} variant="body1">Queries</Typography>
                        <textarea name="query" placeholder='What would you like to enquire?' rows="6" cols="65"></textarea>
                    </Grid>
                </Grid>
                <Grid container sx={{
                    '@media screen and (max-width: 1024px)': {
                        justifyContent: "center"
                    }
                }}>
                    <Grid item xs={8.7} md={10.7}>
                        {/* <input type="submit" value="Send" /> */}
                        <Button value="Send" sx={{ width: '100%', textAlign: 'center', margin: '30px auto' }} variant="contained" type="submit" color="success">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}