import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
  main: {
    justify: 'center',
    paddingTop: '5%',
    minWidth: '50%',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid',
    padding: 40,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    // width: 160,
    height: '100vh',
  },
  media: {
    height: '50vh',
    paddingTop: '56.25%', // 16:9
    padding: 40, // 16:9
    
  },
}));
  