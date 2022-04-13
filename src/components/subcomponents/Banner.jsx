import React from 'react';
import { Typography } from '@mui/material'

export default function Banner(props) {

    return (
        <div className={props.classname}>
            <Typography color="white" variant="h2" justifyContent="center" align="center">{props.title}</Typography>
            <Typography color="white" variant="h2" justifyContent="center" align="center">{props.desc}</Typography>
        </div >
    )
}