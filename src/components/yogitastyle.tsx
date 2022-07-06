import { makeStyles, createStyles, Theme } from "@material-ui/core"
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      position: 'relative',
      top: '15px',
      left: '25px',
      width: '140px',
      height: '40px',
      radius: '5px',
      gap: '10px',
    },
    name: {
      position: 'relative',
      marginTop: '15px', width: '150px', height: '40px',
      // marginRight: '30px',
      // // paddingLeft: '5px',
      // marginTop: '-65px',
      overflow: 'auto',
      maxHeight: '250px',

      "& .MuiAutocomplete-inputRoot":{flexWrap: "nowrap"},
      "& .MuiAutocomplete-listbox":{
      '& .webkit-scrollbar': {
        width: '0.4px'
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'black',
        outline: '1px solid slategrey'
      }}
      // marginLeft: '386px',
      // marginBottom: '-25px',
      // maxHeight: '45px',
    },
    tags: {
      marginTop: '15px', width: '145px',
      position: 'relative',
      // marginRight: '30px',
      // // paddingLeft: '5px',
      // marginTop: '-65px',
      "& .MuiAutocomplete-inputRoot":{flexWrap: "nowrap"},
      // marginLeft: '555px',
      // marginBottom: '-25px',
      // height: '45px',
    },
    teamList: {
      maxHeight: '250px',
      overflowY: 'auto',
      // margin: '0px 5px',
      '&::-webkit-scrollbar': {
          width: 3,
      },
      '&::-webkit-scrollbar-track': {
          backgroundColor: 'white'
      },
      '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.primary.main,
          height: 20,
      },
    },
    clear: {
      position: 'relative',
      marginTop: '18px',
      color: '#3D49B6',
      textDecoration: 'underline',
    },
    Chips: {
      // '@media only  screen and (max-width: 1400px)': {
       position: 'relative',
       "& .MuiChip-label": { fontSize: '9px',fontWeight: 600 },
       marginRight: '1px',
       width: "60px",
       height: "25px"
     },
     chips2 : {
      position: 'relative',
      "& .MuiChip-label": { fontSize: '9px',fontWeight: 600 },
      width: "50px",
      height: "25px"
     },
     drop: {
        // marginRight: '1%',
        width: "60px",
      },
      caught: {
        marginLeft: "auto",
        marginRight: 0
      },
      side2:{
        fontSize:"8px",
        // marginRight: '8px',
        color:"black"
       },
       side:{
        fontSize: '9px',
        fontWeight:"bold",
        color: '#888888',
       },
  })
)
export default useStyle;