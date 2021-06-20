import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  showcase: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'black',
    // border: '5px dashed red',
    maxWidth: 1000,
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: 0,

  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100',
    // background: '#225470',
    opacity: 0.6,
    // color: '#ffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'black',
    // mixBlendMode: 'overlay',
    padding: 20,
    // border: '5px dashed red',
    zIndex: 1,
  },
  text: {
    position: 'relative',
    color: '#ffff',
    // border: '5px dashed red',
    // opacity: .5,
    // top: '10vh',
    // padding: '10%',
    // opacity:1,
    zIndex: 1000,
  },
  btn: {
    position: 'relative',
    // left: '10vh',
    // border: '5px dashed white',
    boxSizing: 'border-box',
    zIndex: 1000,

  },

  video: {
    top: 0,
    left: 0,
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: '100%',
    minHeight: '45vh',
    maxHeight: '60vh',
    objectFit: 'cover',
    opacity: 0.5,
  },

});
