import React from 'react';
import { Card, Grid, CardMedia, Typography } from '@mui/material'

export default function RightAlign(props) {
    return (
        <Grid sx={{ marginBottom: '50px' }} alignItems="center" container spacing={4}>
            <Grid item></Grid>

            <Grid item md={8}>
                <Typography gutterBottom variant="h5">{props.title}</Typography>
                <Typography variant="body1">{props.description}</Typography>
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