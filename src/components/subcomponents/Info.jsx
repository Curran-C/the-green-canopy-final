import React from 'react';
import { Grid, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export default function Info() {

    const theme = createTheme()

    theme.typography.h6 = {
        fontFamily: ['Lota', 'serif'].join(),
        fontSize: '20px',
        fontWeight: 600,
        margin: "30px 35px 10px auto",
        letterSpacing: '1px',
        color: '#05361F',
        '@media screen and (max-width: 1024px)': {
            textAlign: 'center'
        }

    }

    theme.typography.body1 = {
        fontFamily: ['Lota', 'serif'].join(),
        fontSize: '20px',
        fontWeight: 200,
        margin: 'auto 35px auto auto',
        color: '#05361F',
        letterSpacing: '1px',
        '@media screen and (max-width: 1024px)': {
            textAlign: 'center'
        }
    }

    return (
        <div>
            <Grid container>
                <Grid xs={12} md={6} item>
                    <Typography theme={theme} variant="h6">Bengaluru</Typography>
                    <Typography theme={theme} variant="body1">#00 , Lorem Ipsum,</Typography>
                    <Typography theme={theme} gutterBottom variant="body1">lorem ipsum</Typography>
                </Grid>

                <Grid xs={12} md={6} item>
                    <Typography theme={theme} variant="h6">Contact: </Typography>
                    <Typography theme={theme} variant="body1">8495922999 - Priya ,</Typography>
                    <Typography theme={theme} gutterBottom variant="body1">9986282827 - Sahana</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={12} md={6} item>
                    <Typography theme={theme} variant='h6'>Working Hours: </Typography>
                    <Typography theme={theme} variant='body1'>9:00 AM to 7:00 PM </Typography>
                    <Typography theme={theme} variant='body1'>Monday to Saturday </Typography>
                </Grid>
                <Grid xs={12} md={6} item>
                    <Typography sx={{ marginTop: '30px', marginBottom: '30px' }} theme={theme} variant='body1'>queries.tgc@gmail.com</Typography>
                </Grid>
            </Grid>
        </div>
    )
}