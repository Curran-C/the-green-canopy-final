import React from 'react';
import { Typography } from '@mui/material'
import { createTheme } from "@mui/material/styles"

export default function Banner(props) {

    const theme = createTheme();

    theme.typography.h4 = {
        fontFamily: ['Lora', 'serif'].join(),
        fontSize: '50px',
    }

    theme.typography.h5 = {
        fontFamily: ['Lora', 'serif'].join(),
        fontSize: '25px',
        fontWeight: 200
    }

    return (
        <div className={props.classname}>
            <Typography theme={theme} color="white" variant="h4" justifyContent="center" align="center">{props.title}</Typography>
            <Typography theme={theme} color="white" variant="h5" justifyContent="center" align="center">{props.desc}</Typography>
        </div >
    )
}