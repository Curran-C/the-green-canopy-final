import React from 'react'
import { AppBar, Toolbar, Typography, MenuItem, IconButton } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {

    let menuItems = ['Services', 'About', 'Contact Us']

    const theme = createTheme();

    theme.typography.h5 = {
        color: '#004800',
        fontFamily: ['Quintessential', 'cursive'].join(),
        width: '210px',
        fontSize: '25px',
        letterSpacing: '1px',
        fontWeight: 200
    }
    theme.typography.h6 = {
        fontSize: '20px',
        fontFamily: ['Lora', 'serif'].join(),
        fontWeight: 200
    }

    return (
        <div>
            <AppBar style={{ background: 'transparent', boxShadow: 'none', position: 'relative', margin: 0 }}>
                <IconButton className="menulink" component={Link} to="/">
                    <img style={{ height: '70px' }} src='images/logo.png' alt='the green canopy' />
                    <Typography theme={theme} variant="h5">The Green Canopy</Typography>
                </IconButton>
                <Toolbar sx={{ backgroundColor: '#303030', justifyContent: 'center' }}>
                    {menuItems.map((item) => {
                        return (
                            <MenuItem key={item}>
                                <NavLink className="menu-link" component={Link} style={{ textDecoration: 'none' }} to={"/" + item.toLowerCase()}>
                                    <Typography theme={theme} variant="h6">{item}</Typography>
                                </NavLink>
                            </MenuItem>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </div>
    )
}