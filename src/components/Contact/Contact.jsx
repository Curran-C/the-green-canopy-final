import React from 'react';
import Banner from "../subcomponents/Banner"
import { Grid, Box } from '@mui/material'
import Form from '../subcomponents/Form'
import Info from '../subcomponents/Info'
import Map from '../subcomponents/Map'
import Footer from '../Footer'
import './contact.css'


export default function Contact() {



    return (
        <div>
            <Banner classname="contact-bg-img" title="Contact" desc="The Green Canopy" />
            <div style={{ position: 'relative' }}>
                <img className="leafone" src="images/leaves/leaf1.png" alt="leaf" />
                <img className="leaftwo" src="images/leaves/leaf2.png" alt="leaf" />
                <img className="leaffour" src="images/leaves/leaf4.png" alt="leaf" />
            </div>
            <div className="overall-margin">
                <Grid container spacing={4} sx={{ justifyContent: "space-around" }}>
                    <Grid item>
                        <Form />
                    </Grid>
                    <Grid item>
                        <Info />
                        <Box sx={{ marginTop: '30px' }} height='300px' width='370px'>
                            <Map />
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )
}