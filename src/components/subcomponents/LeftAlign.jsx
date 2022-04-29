import React from 'react';
import { Card, Grid, CardMedia, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { createTheme } from '@mui/material/styles'



export default function LeftAlign(props) {

    const theme = createTheme();

    const count = [0, 1, 2]

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
            {/* <Grid item></Grid> */}
            <Grid item md={4}>
                <Card elevation={0} sx={{ backround: 'transparent', borderRadius: 10, width: '350px' }}>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img style={{ display: 'block', height: '100%', width: '100%' }} class="d-block w-100" src={props.image} alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img style={{ display: 'block', height: '100%', width: '100%' }} class="d-block w-100" src={props.image} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img style={{ display: 'block', height: '100%', width: '100%' }} class="d-block w-100" src={props.image} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                    {/* <img style={{ display: 'block', height: '100%', width: '100%' }} src={props.image} alt={props.title} /> */}
                    {/* <CardMedia sx={{ height: 'auto' }} component='img' height='240' image={props.image} /> */}
                </Card>
            </Grid>

            <Grid item md={7} xs={10}>
                <Typography theme={theme} gutterBottom variant="h5">{props.title}</Typography>
                <Typography theme={theme} variant="body1">{props.description}</Typography>
            </Grid>
        </Grid>
    )
}
