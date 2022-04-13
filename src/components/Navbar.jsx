import React from 'react'
import { AppBar, Toolbar, Typography, MenuItem, IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { createTheme } from "@mui/material/styles"
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {

    let menuItems = ['Services', 'About', 'Contact Us']

    return (
        <div className='navbar'>
            <AppBar style={{ background: 'transparent', boxShadow: 'none', position: 'relative', margin: 0 }}>
                <IconButton> <PhotoCamera /> </IconButton>
                <Toolbar sx={{ backgroundColor: '#303030', justifyContent: 'center' }}>
                    {menuItems.map((item) => {
                        return (
                            <MenuItem key={item}>
                                <NavLink className="menu-link" component={Link} style={{ textDecoration: 'none' }} to={"/" + item.toLowerCase()}>
                                    <Typography variant="h6">{item}</Typography>
                                </NavLink>
                            </MenuItem>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </div>
    )
}