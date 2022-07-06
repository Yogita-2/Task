// import { blue } from '@material-ui/core/colors';
import { alpha } from '@material-ui/core/styles';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 21),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    // root: {
    //     margin: theme.spacing(1),
    //     textTransform: 'none',
    //     marginTop: '20px'
        
    // },
    // Date: {
    //   textTransform: 'none',
    //   marginLeft: '-190px',
    //   marginTop: '20px'
    // },
    // Date1: {
    //  textTransform: 'none',
    //  marginLeft: '-320px',
    //  marginTop: '20px',
    // },
    // icon: {
    //   marginTop: '-5px',
    //   color: '#3C48B5',
    //   width: 110,
    // },
    // check: {
    //   marginTop: '20px',
    //   marginLeft: '10px'
    // },
    // scrollbar: {
    //   '&::-webkit-scrollbarColor': {
    //     width: '0.4em'
    //   },
    //   '&::-webkit-scrollbar-track': {
    //     '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    //   },
    //   '&::-webkit-scrollbar-thumb': {
    //     backgroundColor: 'rgba(0,0,0,.1)',
    //     outline: '1px solid slategrey'
    //   }
    // }
  }));

  export default useStyles;