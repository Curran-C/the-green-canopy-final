import React from 'react';
import { Typography, Grid } from '@mui/material'

export default function Form() {
    return (
        <>
            <Typography variant="h1">Drop in your queries</Typography>
            <form>
                <div className='form'>
                    <label>First Name</label>
                    <input type="text" required />
                    <label>Last Name</label>
                    <input type="text" required />
                </div>
                <label>Address:</label>
                <textarea></textarea>
                <div>
                    <label>Email Address</label>
                    <input type="text" required />
                    <label>Phone Number</label>
                    <input type="number" required />
                </div>
                <label>queries:</label>
                <textarea></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}