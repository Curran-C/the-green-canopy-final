import React from 'react';
import { Card, Grid, CardMedia, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export default function RightAlign(props) {

    const theme = createTheme();

    theme.typography.h5 = {
        fontSize: '25px',
        color: '#05361F',
        fontFamily: ['Lora', 'serif'].join(),
        fontWeight: 700
    }
    theme.typography.body1 = {
        fontSize: '17px',
        color: '#05361F',
        fontFamily: ['Lora', 'serif'].join(),
        fontWeight: 400,
        lineHeight: '30px'
    }

    return (
        <Grid sx={{ marginBottom: '50px' }} alignItems="center" container spacing={4}>
            <Grid item></Grid>

            <Grid item md={8}>
                <Typography theme={theme} gutterBottom variant="h5">{props.title}</Typography>
                <Typography theme={theme} variant="body1">{props.description}</Typography>
            </Grid>

            <Grid item></Grid>
            <Grid item md={3}>
                <Card elevation={0} sx={{ borderRadius: 10, width: '350px' }}>
                    <CardMedia sx={{ height: 'auto' }} component='img' image={props.image} />
                </Card>
            </Grid>
        </Grid>
    )
}