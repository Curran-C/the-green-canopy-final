import React from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Footer() {
    return (
        <div className='footer'>
            <Grid container spacing={4} sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                {/* logo */}
                <Grid item>
                    <IconButton sx={{ color: 'white' }}> <PhotoCamera /> </IconButton>
                </Grid>
                {/* address */}
                <Grid item>
                    <Typography variant="h6"> Address:</Typography>
                    <Typography variant="h6"> #00, Lorem Ipsum</Typography>
                    <Typography variant="h6"> lorem Ipsum</Typography>
                </Grid>
                {/* number */}
                <Grid item>
                    <Typography variant="h6"> +91 000000000</Typography>
                    <Typography variant="h6"> +91 000000000</Typography>
                </Grid>
                {/* socials */}
                <Grid item>
                    <IconButton sx={{ color: 'white' }} > <InstagramIcon /> <FacebookIcon /></IconButton>
                </Grid>
            </Grid>
        </div >
    )
}