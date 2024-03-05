import { CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import imageWT from '../../wt.jpg'
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme({
    palette: {
        background: {
            paper: '#f9c10b', // Set background color for paper
        },
    },
});

const About = () =>
{
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3} height="500" className="rounded">
                    <Paper elevation={10}>
                        <img src={imageWT} alt="" />
                    </Paper>
                    <br />
                    <Paper elevation={10}>
                        <br />
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5">
                                Just call us
                            </Typography>
                        </ThemeProvider>
                        <br />
                        <Typography variant="h6" sx=" backgroundColor: #f9c10b">
                            We can help you find someone quickly so that you have the right skills for your school
                        </Typography>
                        <br />
                        <br />


                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper elevation={5}>
                        <Typography variant='h3' wrap>
                            Why Therapy Staffing is important
                        </Typography>

                        <br />
                        <Typography variant='h5' wrap>
                            Helping organizations is our mission
                        </Typography>
                        <br />
                        <Typography variant='h6' wrap>
                            Therapy staffing is important for special kids education because it ensures that children with unique needs receive the necessary attention and care to help them achieve their educational goals. Adequate staffing levels help provide individualized therapy and support to help these children develop their cognitive, social, and emotional skills. Skilled therapists can also help identify and address issues that may be hindering a child's learning or well-being. Proper staffing in special education can improve outcomes for students and help them reach their full potential.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Typography>
                    </Paper>
                </Grid>
            </Grid >
        </>
    )
}

export default About