import React from 'react';
import { Card, Grid, CardMedia, Typography } from '@mui/material'


export default function LeftAlign() {
    return (
        <Grid sx={{ marginBottom: '50px' }} alignItems="center" container spacing={4}>
            <Grid item></Grid>
            <Grid item md={3}>
                <Card elevation={0} sx={{ borderRadius: '0' }}>
                    <CardMedia component='img' height='240' image='https://source.unsplash.com/random' />
                    {/* <CardContent sx={{ padding: '0' }} >
                            <Typography align='center' variant="h6">Title</Typography>
                        </CardContent> */}
                </Card>
            </Grid>
            <Grid item></Grid>

            <Grid item md={8}>
                <Typography gutterBottom variant="h5"> Title</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh sem, aliquet ut dictum vestibulum, convallis mattis risus. Integer lorem turpis, commodo vitae est eu, mollis suscipit nisl. Praesent orci nisl, tempus et urna in, vehicula egestas neque. Duis gravida varius mauris, vitae cursus tellus ultrices a.</Typography>
            </Grid>
        </Grid>
    )
}
