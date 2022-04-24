import React from 'react';
import { Typography, createTheme } from '@mui/material'

export default function Homepage() {

    const theme = createTheme()

    theme.typography.h5 = {
        marginTop: '150px',
        marginBottom: '40px',
        fontFamily: ['Lora', 'serif'].join(),
        fontSize: '25px',
        fontWeight: 600,
        color: '#805a29',
        '@media screen and (max-width: 540px)': {
            fontSize: '15px',

        }
    }
    theme.typography.h2 = {
        fontFamily: ['Kaushan Script', 'cursive'].join(),
        fontSize: '60px',
        fontWeight: 500,
        color: '#805a29',
        marginBottom: '80px',
        letterSpacing: '3px',
        margin: 'auto',
        textAlign: 'center',
        '@media screen and (max-width: 375px)': {
            fontSize: '40px',
            marginBottom: '40px',
        },
        '@media screen and (max-width: 540px)': {
            fontSize: '57px',
            marginBottom: '20px',
        }

    }

    return (
        <div>
            <div className='relative'>
                <img className='plant1' src="images/homepage-imgs/plant1.png" alt="plant"></img>
                <img className='plant2' src="images/homepage-imgs/plant2.png" alt="plant"></img>
            </div>
            {/* <div id="border"> */}
            {/* <Typography className='border' theme={theme} variant='h5' align="center" component="h5">HIGH-END LANDSCAPE SOLUTIONS</Typography> */}
            {/* </div> */}
            <h2 className="subheading"> <span className='underline'>HIG</span>H-END LANDSCAPE SOLUTIONS</h2>
            <Typography sx={{
                width: '55%',
                '@media screen and (max-width: 540px)': {
                    width: '95%'
                }
            }} theme={theme} variant='h2' align="center" component="h1">Transform Your Outdoor Space</Typography>
            <img className='grass' src="images/homepage-imgs/grass.png" alt="grass"></img>
        </div>
    )
}