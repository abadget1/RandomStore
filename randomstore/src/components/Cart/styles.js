import { makeStyles } from '@material-ui/core/styles';
import theme from '../../assets/modules/theme';



export default makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    boxBorder: 5,
  },
  main: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 750,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  total: {
    float: 'right',
  },
  updateBtn: {
    margin: 0,
  },
  btn: {
    textDecoration: 'none',

  }
});
  