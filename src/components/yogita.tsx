import React from 'react';
import { Button, Grid, Chip, Checkbox, Avatar } from '@material-ui/core';
import { Icon } from '@iconify/react';
import useStyles from './yogitastyle';
import { Autocomplete } from "@material-ui/lab";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { TextField } from "@material-ui/core";
export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [Tags, setTags] = React.useState([]);
  const [name, setName] = React.useState([]);
  const handleOpen = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const reset = () => {
    setValue('');
    setName([]);
    setTags([]);
  };
  const handleChange1 = (event: React.ChangeEvent<{ value: any }>) => {
    setValue(event.target.value as string);
    console.log(value);
  };
  const handleChange2 = (event: any, value: any) => {                                                                                                                      
    setName(value as any);
    console.log(value);
  };
  const handleChange3 = (event: any, value: any) => {
    setTags(value as any);
  };
  const Names = [
    {
      short: 'Shubham',
      value: 'ST',
      label: 'Shubham Tiwari',
    },
    {
      short: 'Lalit',
      value: 'LK',
      label: 'Lalit Kandpal',
    },
    {
      short: 'Yogita',
      value: 'YR',
      label: 'Yogita Rawat',
    },
    {
      short: 'Rajendra',
      value: 'RM',
      label: 'Rajendra Mehra',
    },
    {
      short: 'Shubham',
      value: 'ST',
      label: 'Shubham Tiwari',
    },
    {
      short: 'Lalit',
      value: 'LK',
      label: 'Lalit Kandpal',
    },
    {
      short: 'Yogita',
      value: 'YR',
      label: 'Yogita Rawat',
    },
    {
      short: 'Mahipal',
      value: 'MP',
      label: 'Mahipal Pawar',
    },
    {
      short: 'Rajendra',
      value: 'RM',
      label: 'Rajendra Mehra',
    },
    {
      short: 'Shubham',
      value: 'ST',
      label: 'Shubham Tiwari',
    },
    {
      short: 'Ajay',
      value: 'AD',
      label: 'Ajay Dewari',
    },
    {
      short: 'Deepak',
      value: 'DB',
      label: 'Deepak Bungla',
    },
    {
      short: 'Ankit',
      value: 'AP',
      label: 'Ankit Pargai',
    },
  ];
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const Chips = [
    {
      label: "AWS",
      id: 1,
      backColor: "#3d50b6bf",
      color: "white",
    },
    {
      label: "Accounts",
      id: 2,
      backColor: "#d76c73bf",
      color: "white",
    },
    {
      label: "Ui-Ux",
      id: 3,
      backColor: "#6cd78abf",
      color: "white",
    },
    {
      label: "Sales",
      id: 4,
      backColor: "#be6de8bf",
      color: "white",
    },
    {
      label: "Backend",
      id: 5,
      backColor: "#0ba39abf",
      color: "white",
    },
    {
      label: "Backend",
      id: 6,
      backColor: "#0ba39abf",
      color: "white",
    },
    {
      label: "Backend",
      id: 7,
      backColor: "#0ba39abf",
      color: "white",
    },
    {
      label: "AWS",
      id: 8,
      backColor: "#3d50b6bf",
      color: "white",
    },
    {
      label: "Accounts",
      id: 9,
      backColor: "#d76c73bf",
      color: "white",
    },
    {
      label: "Ui-Ux",
      id: 10,
      backColor: "#6cd78abf",
      color: "white",
    },
    {
      label: "Sales",
      id: 11,
      backColor: "#be6de8bf",
      color: "white",
    },
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Button id="toggle"
            className={classes.btn}
            style={{ textTransform: 'capitalize', borderColor: '#3D49B6', borderWidth: '2px', fontWeight: 'bold', color: '#3D49B6', }} variant="outlined" onClick={handleOpen}><span><Icon icon="bx:filter-alt" />  Filter by</span>
          </Button>
        </Grid>
        {open === true &&
          <>
            <Grid item xs={2}>
              <Button variant="outlined" size='small' style={{ textTransform: "none", position: 'relative', marginTop: '15px', width: '140px', height: '40px', color: '#FFFFFF' }}>
                <TextField
                  type="date"
                  InputProps={{ disableUnderline: true }}
                  value={value}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleChange1}
                />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Autocomplete
                multiple
                clearOnBlur={true}
                limitTags={1}
                onChange={(event, value) => handleChange2(event, value)}
                disableClearable
                ListboxProps={{

                  className: classes.teamList
                }}
                className={classes.name}
                id="checkboxes-tags-demo"
                options={Names}
                value={name}
                disableCloseOnSelect
                getOptionLabel={(option) => option.label}
                getOptionSelected={(option, value) => option.label === value.label}
                renderTags={(options) => {
                  return options.map((options) => (
                    <Chip style={{ marginRight: "2px", width: "60px", height: "20px", fontSize: "10px" }}
                      label={options.short} />
                  ))
                }}
                renderOption={(option, { selected }) => (
                  <React.Fragment >
                    <Grid
                      className={classes.drop}>
                      <Avatar className={classes.side2} style={{ height: '20px', width: '20px' }}>
                        {option.value}</Avatar>
                    </Grid>
                    <div className={classes.side}>
                      {option.label}
                    </div>
                    <div className={classes.caught}>
                      <Checkbox checked={selected}
                        color="primary"
                        size="small"
                      />
                    </div>
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" value={value} placeholder='Names' size='small' />
                )}
              />
            </Grid>
            {/* </div> */}
            {/* <div> */}
            <Grid item xs={2}>
              <Autocomplete
                disableClearable
                // ChipProps={Chips}
                value={Tags}
                multiple
                limitTags={2}
                onChange={handleChange3}
                ListboxProps={{
                  className: classes.teamList,
                  style: {
                    maxHeight: 250, scrollColor: 'rebeccapurple green'
                  }
                }}
                className={classes.tags}
                id="checkboxes-tags-demo"
                options={Chips}
                disableCloseOnSelect
                getOptionLabel={(option) => option.label}
                getOptionSelected={(option, value) => option.label === value.label}
                renderTags={(option) => {
                  return option.map((option) => (
                    <Chip
                      key={option.id}
                      label={option.label}
                      className={classes.chips2}
                      style={{
                        marginRight: "3px",
                        backgroundColor: `${option.backColor}`,
                        color: `${option.color}`,
                      }}
                    />
                  ));
                }}
                renderOption={(option, { selected }) => (
                  <>
                    <Chip
                      key={option.id}
                      size="small"
                      label={option.label}
                      className={classes.Chips}
                      style={{
                        backgroundColor: `${option.backColor}`,
                        color: `${option.color}`,
                      }}
                    />
                    <Checkbox checked={selected} size="small" color="primary" />
                  </>
                )}
                renderInput={(params) => (
                  <TextField {...params} InputLabelProps={{ shrink: true }} variant="outlined" size='small' />
                )}
              />
            </Grid>
            <Grid item xs={2} >
              {(value !== "" || Tags.length !== 0 || name.length !== 0) && (
                <div onClick={reset} className={classes.clear}>
                  Clear all
                </div>
              )}
            </Grid>
          </>
        }
      </Grid>
    </>
  );
}