import React from 'react';
import Banner from "./subcomponents/Banner"
import { Grid, Box } from '@mui/material'
import Form from './subcomponents/Form'
import Info from './subcomponents/Info'
import Map from './subcomponents/Map'

export default function Contact() {



    return (
        <div>
            <Banner classname="contact-bg-img" title="Contact" desc="The Green Canopy" />
            <div className="overall-margin">
                <Grid container spacing={4} sx={{ justifyContent: "space-around" }}>
                    <Grid item>
                        <Form />
                    </Grid>
                    <Grid item>
                        <Info />
                        <Box height='300px' width='300px'>
                            <Map />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}