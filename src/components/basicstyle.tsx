import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            minWidth: 275,
        },
        card1: {
            minWidht: 275,
            marginTop: '2%'
        },
        btn: {
            display: 'flex',
            position: 'fixed',
            textTransform: "capitalize",
            bottom: '0px',
            // height: '8%',
            width: '50%',
            left: '0px',
        },
        btn1: {
            position: 'fixed',
            textTransform: "capitalize",
            bottom: '0px',
            // height: '7%',
            width: '50%',
            right: '0px'
        },
        chip: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '7px',
            '& > *': {
                margin: theme.spacing(1),
              },
        },
        close: {
            position: 'absolute',
            color: 'black',
            right: '10px'
        },
    }));

export default useStyles;