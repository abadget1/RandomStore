import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';


const rawTheme = createMuiTheme({
  
  typography: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: 12,
    fontWeightLight: 100, // Raleway-light
    fontWeightRegular: 300, // Raleway-regular
    fontWeightMedium: 600, // Raleway-medium
    fontFamilySecondary: "'Montserrat', sans-serif",
  },
});
const fontHeader = {
  // color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
};
const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightMedium,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,      
      fontWeight: rawTheme.typography.fontWeightLight,
      fontSize: 14,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    subtitle2: {
      ...rawTheme.typography.subtitle2,
      fontWeight: rawTheme.typography.fontWeightMedium,
      fontSize: 16,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },

  },
};

export default theme;
