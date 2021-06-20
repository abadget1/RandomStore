import { Container, Typography, Card, CardMedia, Grid, Button, useTheme } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';


export default function Home() {
    const styles = useStyles();
    return (
      <>

      <Container className={styles.showcase}>
            
            
            {/* <CardMedia component='video' src={'"https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761"'} type='video/mp4' preload="auto" muted loop autoplay/> */}
      
      <Card >
        {/* <CardMedia className={styles.video} component='img' image={'https://www.rcsdk8.org/sites/main/files/main-images/camera_lense_0.jpeg'}/>         */}
        <CardMedia 
          className={styles.video}
          type='video/mp4' 
          preload='auto' 
          loop
          autoPlay='autoPlay'
          muted 
          component='video' 
          src={'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4'}
          // src={'https://youtu.be/E9reXigbC_A'}
          />

        <div className={styles.overlay}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
            <Typography className={styles.text} variant='h3' >Welcome to Random Store!</Typography>
        </Grid>
        <Grid item  xs={6} lg={12} >
        <Typography className={styles.text} variant='h6'>
          Random store has awesome stuff you can't buy! Try out a golf club, buy a chair, maybe a tennis bracelet, or even a car!</Typography>
        </Grid>
        <Grid item xs={12} lg={12} className={styles.btn}>
          <Button  variant="contained" color="secondary" href='/'>
            Find Out
          </Button>
        </Grid>
        </Grid>
        </div>
        </Card>



      </Container>
      </>
    )
}
// <video src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4" type='video/mp4' preload="auto" muted loop autoplay controls/>
