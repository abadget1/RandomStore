import { Container, Typography, Grid, Button, useTheme } from '@material-ui/core'
import React from 'react'

const makeStyles = ((theme)=> ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function About() {
    const styles = makeStyles(useTheme());
    return (
      <main>
      {/* Hero unit */}
      <div className={styles.heroContent}>
        <Container maxWidth="sm">
          <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              About            
              </Typography>
        </Container>
      </div>
      </main>
    )
}
