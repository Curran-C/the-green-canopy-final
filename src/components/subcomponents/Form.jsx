import React from 'react';
import { Typography, Grid, Button } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export default function Form() {

    const theme = createTheme()

    theme.typography.h4 = {
        margin: '30px auto 15px auto',
        fontFamily: ['Lota', 'serif'].join(),
        fontSize: '30px',
        color: '#05361F'
    }

    theme.typography.body1 = {
        fontFamily: ['Lota', 'serif'].join(),
        color: '#05361F',
        fontSize: '17px',
        margin: '20px auto 3px auto'
    }

    return (
        <>
            <Typography align='center' theme={theme} variant="h4">Drop in your queries</Typography>
            <form>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography theme={theme} variant="body1">First Name: </Typography>
                        <input placeholder='First Name' size="30" type="text" required />
                    </Grid>
                    <Grid item>
                        <Typography theme={theme} variant="body1">Last Name: </Typography>
                        <input placeholder='Last Name' size="30" type="text" required />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item>
                        <Typography theme={theme} variant="body1">Address:</Typography>
                        <textarea placeholder='Area, City' rows="6" cols="65"></textarea>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography theme={theme} variant="body1">Email Address:</Typography>
                        <input placeholder='Email' size="30" type="email" required />
                    </Grid>
                    <Grid item>
                        <Typography theme={theme} variant="body1">Phone Number:</Typography>
                        <input placeholder='Phone Number' size="30" type="number" min="1111111111" max='9999999999' required />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography theme={theme} variant="body1">Queries:</Typography>
                        <textarea placeholder='What would you like to enquire?' rows="6" cols="65"></textarea>
                    </Grid>
                </Grid>
                <Button sx={{ width: '100%', margin: '30px auto' }} variant="contained" type="submit" color="success">Submit</Button>
            </form>
        </>
    )
}