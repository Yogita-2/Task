import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        paper: {
            '@media screen and (max-width: 600px)': {
                justifyContent: 'center',
                width: '370px'
            },
            '@media screen and (min-width: 1200px)': {
                width: '45%'
            },
            height: '85%',
            position: 'relative',
            display: 'flex',
            marginTop: '4%',
            justifyContent: 'center',
            padding: 30
        },
        main: {
            width: '100%',
            position: 'relative',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-between',
        },
        make: {
            fontSize: 15,
            Color: theme.palette.primary.contrastText,
            fontFamily: 'Nunito Sans',
            marginTop: '-3%',
            fontStyle: 'normal'
        },
        style: {
            marginBottom: '1%',
            fontSize: 15,
            Color: theme.palette.primary.contrastText,
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
        },
        icon: {
            marginTop: '-2px',
            color: 'blue',
            width: 106,
            fontSize: '16',
        },
        close: {
            position: 'absolute',
            top: -23,
            right: -35,

        },
        smallRadioButton: {
            '@media only screen and (min-width: 600px)': {
                justifyContent: "space-evenly",
                marginTop: "-5px"
            },
            "& svg": {
                width: "0.7em",
                height: "0.7em",
            },
        },
        chips: {
            margin: theme.spacing(0.5, 0.25),
            marginRight: '10px',
            marginTop: '10px',
            marginBottom: '10px',
            height: '30px'
        },
        chips2: {
            margin: theme.spacing(0.5, 0.25),
            width: '140px',
            marginRight: '10px',
            marginTop: '10px',
            marginBottom: '10px',
            height: '31px'
        },
        button: {
            display: 'flex',
            justifyContent: 'flex-end',
            positon: 'fixed',
            bottom: '0px',
        },
        buttonStyle1: {
            '@media screen and (min-width: 1300px) and (min-width: 768px)': {
                width: 135,
                height: 35,
            },

            '& span': {
                fontStyle: 'normal',
                textTransform: 'capitalize',
                letterSpacing: '0.05em',
                color: theme.palette.text.secondary,
            },
            '@media screen and (max-width: 600px)': {
                width: '88%',
            },
        },
        resetButton: {
            '&:focus': {
                outline: 'none',
            },
        },
        btn2: {
            '@media screen and (min-width: 1300px) and (min-width: 768px)': {
                width: 140,
                height: 35,
                marginLeft: '5%',
            },

            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            outline: 'none',
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main,
            },
            '&:focus': {
                textDecoration: 'none',
                border: 'none',
                outline: 'none',
            },
            '@media screen and (max-width: 600px)': {
                width: '88%',
            },
        },
        text: {
            '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                marginBottom: '2px'
            },
            '& fieldset': {
                border: `1px solid ${theme.palette.primary.contrastText}`,
            },
        },
        text1: {
            '& .MuiOutlinedInput-root': {
                borderRadius: 3,
            },
            '& fieldset': {
                border: `1px solid ${theme.palette.primary.contrastText}`,
            },
        },
        close1: {
            '&:focus': {
                outline: 'none',

            },
        }
    }),
);
export default useStyles;

