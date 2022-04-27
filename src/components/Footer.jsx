import React from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'



export default function Footer() {

    const theme = createTheme();

    theme.typography.h6 = {
        fontFamily: ['Quintessential', 'cursive'].join(),
        fontSize: '20px',
        fontWeight: 800,
        letterSpacing: '1.5px',
        // '@media screen and (max-width: 540px)': {
        //     fontSize: '17px'
        // }
    }
    theme.typography.h5 = {
        fontFamily: ['Lora', 'serif'].join(),
        fontSize: '19px',
        fontWeight: 500,
        letterSpacing: '1px'

    }

    return (
        <div className='footer'>
            <Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* logo */}
                <Grid item align='center' md={4} xs={4}>
                    <IconButton>  <img style={{ height: '100px' }} src='images/logo.png' alt='the green canopy' /> </IconButton>
                </Grid>
                {/* address */}
                {/* <Grid item>
                    <Typography gutterBottom theme={theme} variant="h5"> Address:</Typography>
                    <Typography theme={theme} variant="h6"> #00, Lorem Ipsum</Typography>
                    <Typography theme={theme} variant="h6"> lorem Ipsum</Typography>
                </Grid> */}
                {/* number */}
                <Grid item align='center' md={4} xs={4}>
                    <Typography theme={theme} variant="h6">The Green Canopy</Typography>
                    {/* <Typography theme={theme} variant="h6"> +91 8495922999 - Priya</Typography>
                    <Typography theme={theme} variant="h6"> +91 9986282827 - Sahana</Typography> */}
                </Grid>
                {/* socials */}
                <Grid item align='center' md={4} xs={4}>
                    <IconButton onClick={() => window.open('https://www.instagram.com/the_green_canopy/')} sx={{ color: 'white' }} > <InstagramIcon sx={{ fontSize: '40px' }} /> {/*<FacebookIcon /> */}</IconButton>
                </Grid>
            </Grid>
        </div >
    )
}