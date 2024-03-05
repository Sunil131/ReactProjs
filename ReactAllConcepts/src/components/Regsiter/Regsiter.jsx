import { Container, TextField, Button } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'

function Regsiter()
{
    return (
        <>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '70ch' }, }} noValidate autoComplete="off" >
                <div>
                    <TextField required id="outlined-basic" label="First Name" variant="outlined" size="medium" />
                </div>
                <div>
                    <TextField required id="outlined-basic" label="Last Name" variant="outlined" size="medium" />
                </div>
                <div>
                    <TextField required id="outlined-basic" label="Email Address" variant="outlined" size="medium" />
                </div>
                <div>
                    <TextField required id="outlined-basic" label="Password" variant="outlined" size="medium" type="password" />
                </div>
                <div>
                    <TextField required id="outlined-basic" label="Confirm Password" variant="outlined" size="medium" type="password" />
                </div>
                <Button size="large" variant="outlined" onClick="#">Register</Button>
            </Box>
        </>
    )
}

export default Regsiter