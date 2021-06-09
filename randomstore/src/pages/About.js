import { Container, Typography, Grid, Button } from '@material-ui/core'
import React from 'react'

const makeStyles = ()=> ({
    root: {
        maxWidth: 345,
        borderRadius: 25,
      },
      media: {
        height: 140,
      },
    });

export default function About() {
    const styles = makeStyles();
    return (
        <div>
      {/* Hero unit */}
      <div className={styles.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                About page            
                </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={styles.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href='/home'>
                    Home                  
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href='/'>
                    Shop
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}        </div>
    )
}
