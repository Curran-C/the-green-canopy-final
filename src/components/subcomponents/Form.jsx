import React from 'react';
import { Typography } from '@mui/material'

export default function Form() {
    return (
        <>
            <h1>Drop in your queries</h1>
            <form>
                <div>
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
            </form>
        </>
    )
}