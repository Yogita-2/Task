// import React, { useState } from "react";
// import Checkbox from '@material-ui/core/Checkbox';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Button from '@material-ui/core/Button';
// import useStyles from "./makeStyle";
// import Grid from "@material-ui/core/Grid";

// export default function OutlinedButtons() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);

//     const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
//     const checkedIcon = <CheckBoxIcon fontSize="small" />;

//     const TopNames = [
//         { title: 'The Shawshank Redemption', year: '1994' },
//         { title: 'The Godfather', year: '1972' },
//         { title: 'The Godfather: Part II', year: '1974' },
//         { title: 'The Dark Knight', year: '2008' },
//         { title: '12 Angry Men', year: '1957' },
//         { title: 'The Lord of the Rings: The Two Towers', year: '2002' },
//         { title: "One Flew Over the Cuckoo's Nest", year: '1975' },
//         { title: 'Goodfellas', year: '1990' },
//         { title: 'The Matrix', year: '1999' },
//         { title: 'Seven Samurai', year: '1954' },
//         { title: 'Star Wars: Episode IV - A New Hope', year: '1977' },
//         { title: 'City of God', year: '2002' },
//         { title: 'Se7en', year: '1995' },
//     ]

//     const handleOpen = () => {
//         if (open === false) {
//             setOpen(true);
//         } else {
//             setOpen(false);
//         }
//     };

//     const values = {
//         someDate: new Date().toISOString().substring(0, 10),
//     };

//     return (
//         <>
//             <Grid container direction="row">
//                 <Grid item xs={3}>
//                     <Button onClick={handleOpen} className={classes.root} variant="outlined" >Tape Here</Button>
//                 </Grid>
//                 {open === true && (
//                     <>
//                         <Grid item xs={2}>
//                             <Button
//                                 className={classes.Date}
//                                 variant="outlined"
//                             >
//                                 Date
//                             </Button>
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Button
//                                 className={classes.Date1}
//                                 variant="outlined"
//                             >
//                                 Time
//                             </Button>
//                         </Grid>
//                     </>
//                 )
//                 }
//             </Grid>
//             <Autocomplete
//                 multiple
//                 id="checkboxes-tags-demo"
//                 options={TopNames}
//                 disableCloseOnSelect
//                 getOptionLabel={(option) => option.year}      // option.title //
//                 renderOption={(option, { selected }) => (
//                     <>
//                         <Checkbox
//                             icon={icon}
//                             checkedIcon={checkedIcon}
//                             style={{ marginRight: 8 }}
//                             checked={selected}
//                         />
//                         {/* {option.title} */}
//                         {option.year}
//                     </>
//                 )}
//                 style={{ width: 500 }}
//                 renderInput={(params) => (
//                     <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
//                 )}
//             />
//         </>
//     );
// }

import React, { useState } from "react";
import useStyles from "./homestyle";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

  export default function OutlinedButtons() {
  const classes = useStyles(); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
  }




