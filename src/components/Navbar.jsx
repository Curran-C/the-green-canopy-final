import React from 'react'
import { AppBar, Toolbar, Typography, MenuItem, IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

export default function Navbar() {

    let menuItems = ['Services', 'About', 'Contact Us']

    return (
        <div className='navbar'>
            <AppBar style={{ background: 'transparent', boxShadow: 'none', position: 'relative', margin: 0 }}>
                <IconButton> <PhotoCamera /> </IconButton>
                <Toolbar sx={{ backgroundColor: '#435037', justifyContent: 'center' }}>
                    {menuItems.map((item) => {
                        return (
                            <MenuItem key={item}>
                                <Typography variant="h6">{item}</Typography>
                            </MenuItem>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </div>
    )
}