import React from "react";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { Paper, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button, Chip, useTheme } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Icon } from '@iconify/react';
import useStyles from "./modalstyle";

interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
    backgroundColor: string;
    color: string;
}
const input = {
    id: 1,
    todo: "AWS",
    isDone: false,
    backgroundColor: "#3D50B6BF",
    color: "white",
};
const input2 = {
    id: 2,
    todo: "Ui-Ux",
    isDone: false,
    backgroundColor: "#6CD78A",
    color: "white",
};
const input3 = {
    id: 3,
    todo: "Sales",
    isDone: false,
    backgroundColor: "#BE66E8BF",
    color: "white",
};

const dateNow = new Date();
const year = dateNow.getFullYear();
const monthWithOffset = dateNow.getUTCMonth() + 1;
const month = monthWithOffset.toString().length < 2 ? `0${monthWithOffset}` : monthWithOffset;
const date = dateNow.getUTCDate().toString().length < 2 ? `0${dateNow.getUTCDate()}` : dateNow.getUTCDate();
const materialDateInput = `${year}-${month}-${date}`;
const get_random_color = () => {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color = color + (sub.length == 1 ? '0' + sub : sub);
    }
    return "#" + color;
}

export default function TransitionsModal() {
    const classes = useStyles();
    const [hide, setHide] = React.useState('');
    const [text, setText] = React.useState(false);
    const [inputText, setInputText] = React.useState('');
    const [inputText2, setInputText2] = React.useState('');
    const [inputText3, setInputText3] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("Yes");
    const [todo, setTodo] = React.useState<string>("");
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [pres, setPres] = React.useState<Todo[]>([input, input2, input3,]);
    const [date, setDate] = React.useState<string>(materialDateInput);
    const theme = useTheme();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleHide = (event: any) => {
        setHide(event.target.value as string);
    };


    const handleinput2 = (event: React.ChangeEvent<{ value: string }>) => {
        setInputText(event.target.value as string);
    };


    const handleinput3 = (event: React.ChangeEvent<{ value: string }>) => {
        setInputText2(event.target.value as string);
    };


    const handleinput4 = (event: React.ChangeEvent<{ value: string }>) => {
        setInputText3(event.target.value as string);
    };

    const dateChange = (event: React.ChangeEvent<{ value: string }>) => {
        setDate(event.target.value as string)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const textShow = () => {
        setText(text === false);
    };

    const handleremove = (index: any) => {
        const list = [...todos];

        list.splice(index, 1);

        setTodos(list);
    };

    const addArray = (e: any) => {

        console.log("e", e)
        setTodos([
            ...todos, pres[e]
        ])


        console.log("todos", setTodos)
    };

    const handleAdd2 = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    todo,
                    isDone: false,
                    backgroundColor: "#D76C73",
                    color: "white",
                },
            ]);
            setTodo("");
        }
        todos.map((e) => {
            for (let i = 0; i < 50; i++)
                if (e.todo === todo) {
                    const list = [...todos]
                    list.splice(i, i)
                    setTodos(list);
                }
        })


    };

    const AllValues = [] = [date, value, hide, inputText, inputText2, inputText3, todos, pres];

    const handlePost = () => {
        const list2 = [input, input2, input3, ...todos];
        setPres(list2);
        console.log(AllValues);


    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                reactOpen
            </button>
            <Modal open={open} className={classes.modal}>
                <Paper className={classes.paper}>
                    <div className={classes.main}>
                        <Grid container >
                            <Grid item className={classes.make} md={12} xs={12}>
                                <span>Standup Notes for </span>
                                <TextField
                                    id="date"
                                    type="date"
                                    value={date}
                                    onChange={dateChange}
                                    InputProps={{
                                        disableUnderline: true,
                                        color: 'primary',
                                        className: classes.icon,
                                    }}

                                />

                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={8} xs={12}>
                                <div className={classes.style}>
                                    Did you accomplish yesterday's tasks ?
                                </div>
                            </Grid>
                            <Grid item md={4} xs={4}>
                                <RadioGroup row className={classes.smallRadioButton}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel

                                        label='Yes'
                                        value="Yes"
                                        control={<Radio color="primary" />}
                                    />
                                    <FormControlLabel

                                        label="No"
                                        value="No"
                                        control={<Radio color="primary" />}
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={11}>
                                <FormControl fullWidth variant="outlined">
                                    {value === "No" && (
                                        <TextField
                                            multiline
                                            value={hide}
                                            className={classes.text}
                                            fullWidth
                                            size="small"
                                            placeholder="Type reason (Optional)"
                                            variant="outlined"
                                            onChange={handleHide}
                                        />
                                    )}
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className={classes.style}>
                                    What did you accomplish yesterday ?
                                </div>
                            </Grid>
                            <Grid item xs={11}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        multiline
                                        value={inputText}
                                        className={classes.text}
                                        size="small"
                                        fullWidth
                                        placeholder="Type here"
                                        variant="outlined"
                                        onChange={handleinput2}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className={classes.style}>What is your goal today ?</div>
                            </Grid>
                            <Grid item xs={11}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        multiline
                                        value={inputText2}
                                        size="small"
                                        className={classes.text}
                                        placeholder="Type here"
                                        variant="outlined"
                                        onChange={handleinput3}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className={classes.style}>Blockers </div>
                            </Grid>
                            <Grid item xs={11}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        multiline
                                        value={inputText3}
                                        className={classes.text}
                                        fullWidth
                                        size="small"
                                        placeholder="Type here"
                                        variant="outlined"
                                        onChange={handleinput4}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={12} xs={12}>
                                <div className={classes.style}>Tags</div>
                            </Grid>
                            <Grid item md={11} xs={11}>
                                <form onSubmit={handleAdd2}>
                                    <TextField

                                        autoComplete="off"
                                        fullWidth
                                        value={todo}
                                        className={classes.text1}
                                        id="popover"
                                        placeholder="Select and/or Create your tag"
                                        variant="outlined"
                                        size="small"
                                        onChange={(e) => setTodo(e.target.value)}
                                        InputProps={{
                                            startAdornment: todos.map((t, index) => (
                                                <Chip
                                                    key={index}
                                                    size="medium"
                                                    className={classes.chips}
                                                    deleteIcon={<CloseIcon style={{ color: "white" }} />}
                                                    onDelete={() => handleremove(index)}
                                                    label={t.todo}
                                                    style={{
                                                        backgroundColor: get_random_color(),
                                                        color: `${t.color}`
                                                    }}
                                                ></Chip>
                                            )),
                                            endAdornment: (
                                                <span>
                                                    {text === true ? (<Icon icon="mdi:menu-down" rotate={2} fontSize="small"
                                                        onClick={textShow} style={{
                                                            position: 'absolute',
                                                            right: 7,
                                                            top: 14,
                                                        }} />) : (<Icon icon="mdi:menu-down"
                                                            fontSize="small"
                                                            style={{
                                                                position: 'absolute',
                                                                right: 7,
                                                                top: 14,

                                                            }}
                                                            onClick={textShow}
                                                        />)}
                                                </span>
                                            ),
                                        }}
                                    />
                                    {text === true && (
                                        <TextField
                                            fullWidth
                                            size="small"
                                            id="outlined-basic"
                                            className={classes.text}
                                            variant="outlined"
                                            disabled
                                            InputProps={{
                                                startAdornment: pres.map((t, index: any) => (
                                                    <Chip
                                                        key={index}
                                                        size="medium"
                                                        onClick={() => addArray(index)}
                                                        className={classes.chips2}
                                                        label={t.todo}
                                                        style={{
                                                            backgroundColor: `${t.backgroundColor}`,
                                                            color: `${t.color}`,
                                                        }}
                                                    ></Chip>
                                                )),
                                            }}
                                        />
                                    )}
                                </form>
                            </Grid>
                        </Grid>
                        <Grid className={classes.button} container>
                            <Grid item md={3} xs={6}>
                                <Button
                                    className={`${classes.buttonStyle1} ${classes.resetButton}`}
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleCancel}
                                    style={{ border: `1px solid ${theme.palette.text.secondary}` }}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <Button
                                    className={classes.btn2}
                                    variant="contained"
                                    color="primary"
                                    onClick={handlePost}
                                >
                                    Post
                                </Button>
                            </Grid>
                        </Grid>
                        <span className={classes.close}>
                            <Button className={classes.close1} variant="text" onClick={handleClose}><CloseIcon /></Button>
                        </span>
                    </div>
                </Paper>
            </Modal>
        </div>
    );
}