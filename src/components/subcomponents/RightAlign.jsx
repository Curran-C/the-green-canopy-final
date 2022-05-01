import React from 'react';
import { Card, Grid, CardMedia, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export default function RightAlign(props) {

    const theme = createTheme();

    theme.typography.h5 = {
        fontSize: '25px',
        color: '#05361F',
        fontFamily: ['Lora', 'serif'].join(),
        fontWeight: 700,
        '@media screen and (max-width: 1024px)': {
            textAlign: 'center'
        }
    }
    theme.typography.body1 = {
        fontSize: '20px',
        color: '#05361F',
        fontFamily: ['Lora', 'serif'].join(),
        fontWeight: 400,
        lineHeight: '30px',
        '@media screen and (max-width: 1024px)': {
            textAlign: 'center'
        }
    }

    return (
        <Grid sx={{ marginBottom: '50px', justifyContent: 'center' }} alignItems="center" container spacing={4}>
            {/* <Grid order={{ xs: 1 }} item></Grid> */}

            <Grid order={{ xs: 3, md: 2 }} item md={7} xs={10}>
                <Typography theme={theme} gutterBottom variant="h5">{props.title}</Typography>
                <Typography theme={theme} variant="body1">{props.description}</Typography>
            </Grid>

            <Grid order={{ xs: 2, md: 3 }} item md={4}>
                <Card elevation={0} sx={{ borderRadius: 10, width: '350px' }}>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <CardMedia sx={{ height: 'auto' }} component='img' image={props.image[0]} />
                                {/* <img style={{ display: 'block', height: '100%', width: '100%' }} className="d-block w-100" src={props.image[0]} alt="First slide" /> */}
                            </div>
                            <div class="carousel-item">
                                <CardMedia sx={{ height: 'auto' }} component='img' image={props.image[1]} />
                                {/* <img style={{ display: 'block', height: '100%', width: '100%' }} className="d-block w-100" src={props.image[1]} alt="Second slide" /> */}
                            </div>
                            <div class="carousel-item">
                                <CardMedia sx={{ height: 'auto' }} component='img' image={props.image[2]} />
                                {/* <img style={{ display: 'block', height: '100%', width: '100%' }} className="d-block w-100" src={props.image[2]} alt="Third slide" /> */}
                            </div>
                        </div>
                    </div>
                    {/* <img style={{ display: 'block', height: '100%', width: '100%' }} src={props.image} alt={props.title} /> */}
                    {/* <CardMedia sx={{ height: 'auto' }} component='img' image={props.image} /> */}
                </Card>
            </Grid>
        </Grid>
    )
}