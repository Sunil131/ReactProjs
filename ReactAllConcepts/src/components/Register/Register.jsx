import { Container, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState, useContext } from 'react'
import { UserContext } from '../../UserContext';




function Register()
{
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [errors, setErrors] = useState({});

    const { user, setUser } = useContext(UserContext);
    console.log(user);



    const handleEmail = (e) =>
    {
        setEmail(e.target.value)
        if (!email.trim())
        {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email))
        {
            errors.email = "Email is not valid";
        } else
        {
            errors.email = "";
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const validationErrors = {};

        if (!first.trim())
        {
            validationErrors.first = "First name is required";
        }
        if (!last.trim())
        {
            validationErrors.last = "Last name is required";
        }
        if (!email.trim())
        {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email))
        {
            validationErrors.email = "Email is not valid";
        } else
        {
            validationErrors.email = "";
        }

        if (!password.trim())
        {
            validationErrors.password = "Password is required";
        } else if (password.length < 6)
        {
            validationErrors.password = "Password must be at least 6 characters long";
        }
        if (password !== verifyPassword)
        {
            validationErrors.verifyPassword = "Passwords do not match";
        }

        if (Object.keys(validationErrors).length === 0)
        {
            // Form is valid, submit data or perform further actions
            console.log(first, last, email, password);
        } else
        {
            setErrors(validationErrors);
        }




        console.log(user);

        const newUser = {
            First: first.trim(),
            Last: last.trim(),
            Email: email.trim(),
            Password: password.trim()
        };

        setUser(newUser)





    };

    return (
        <Container>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '70ch' } }} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <div>
                    <TextField required id="first" label="First Name" variant="outlined" size="medium" onChange={(e) => setFirst(e.target.value)} />
                    {errors.first && <span className="error">{errors.first}</span>}
                </div>
                <div>
                    <TextField required id="last" label="Last Name" variant="outlined" size="medium" onChange={(e) => setLast(e.target.value)} />
                    {errors.last && <span className="error">{errors.last}</span>}
                </div>
                <div>
                    <TextField required id="email" label="Email Address" variant="outlined" size="medium" onChange={handleEmail} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <TextField required id="password" label="Password" variant="outlined" size="medium" type="password" onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div>
                    <TextField required id="verifyPassword" label="Confirm Password" variant="outlined" size="medium" type="password" onChange={(e) => setVerifyPassword(e.target.value)} />
                    {errors.verifyPassword && <span className="error">{errors.verifyPassword}</span>}
                </div>
                <Button size="large" variant="outlined" type="submit">Register</Button>
            </Box>
        </Container>
    );
}

export default Register;