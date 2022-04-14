import React from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createTheme } from '@mui/material/styles'


export default function Footer() {

    const theme = createTheme();

    theme.typography.h6 = {
        fontFamily: ['Lora', 'serif'].join(),
        fontSize: '15px',
        fontWeight: 200,
        letterSpacing: '1px'
    }
    theme.typography.h5 = {
        fontFamily: ['Lora', 'serif'].join(),
        fontSize: '19px',
        fontWeight: 500,
        letterSpacing: '1px'

    }

    return (
        <div className='footer'>
            <Grid container spacing={4} sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                {/* logo */}
                <Grid item>
                    <IconButton>  <img src='images/logo.png' alt='the green canopy' /> </IconButton>
                </Grid>
                {/* address */}
                <Grid item>
                    <Typography gutterBottom theme={theme} variant="h5"> Address:</Typography>
                    <Typography theme={theme} variant="h6"> #00, Lorem Ipsum</Typography>
                    <Typography theme={theme} variant="h6"> lorem Ipsum</Typography>
                </Grid>
                {/* number */}
                <Grid item>
                    <Typography theme={theme} variant="h6"> +91 000000000</Typography>
                    <Typography theme={theme} variant="h6"> +91 000000000</Typography>
                </Grid>
                {/* socials */}
                <Grid item>
                    <IconButton sx={{ color: 'white' }} > <InstagramIcon /> <FacebookIcon /></IconButton>
                </Grid>
            </Grid>
        </div >
    )
}