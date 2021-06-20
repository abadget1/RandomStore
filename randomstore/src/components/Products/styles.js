import { makeStyles } from '@material-ui/core/styles';
import theme from '../../assets/modules/theme';

export default makeStyles({
  heroContent: {
    // border: '2px solid red',
    padding: '2%',
    display: 'absolute',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardGrid: {
    // border: '2px solid blue',
    display: 'block',
    direction: 'column',
  },
  btn: {
    textDecoration: 'none',
    disableRipple: 'true',
    disableFocusRipple: 'true',
    backgroundColor: 'transparent',
  }
});
  