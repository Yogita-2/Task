import React from 'react';
import useStyles from "./basicstyle";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import CloseIcon from "@material-ui/icons/Close";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

export default function BasicModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        console.log("You clicked the Chip. ");
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };


    return (
        <>
            {open == true && (
                <Card className={classes.card}>
                    <span className={classes.close}>
                        <CloseIcon onClick={handleClose}></CloseIcon>
                    </span>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            <Avatar>EM</Avatar>
                            Elon Musk
                        </Typography>
                        <Typography color="textSecondary">
                            Elon Musk , (born june 28, 1971, Pretoria, South Africa), South African-born American entrepreneur who cofounded the electronic-payment firm PayPal and formed SpanceX, maker
                            launch vehicles and spacecraft.
                        </Typography>
                    </CardContent>
                    <div className={classes.chip}>
                        <Chip icon={<FaceIcon />}
                            label="Yogita"
                            color="primary"
                            onClick={handleClick}
                        />
                        <Chip label="Guddi"
                            onDelete={handleDelete}
                            color="secondary"
                        />
                        <Chip icon={<FaceIcon />}
                            label="Rawat"
                            color="primary"
                            onClick={handleClick}
                        />
                    </div>
                </Card>
            )}

            {open == true && (
                <Card className={classes.card1}>
                    <span className={classes.close}>
                        <CloseIcon onClick={handleClose}></CloseIcon>
                    </span>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Oprah Winfrey
                        </Typography>
                        <Typography color="textSecondary">
                            Winfrey was born into poverty in rural Mississippi to a single teenage mother and later raised in inner-city Milwaukee. She has stated that she molested during her childhood.
                            She is an American talk show host, television producer, actress and author and also a philanthropist.
                        </Typography>
                    </CardContent>
                </Card>
            )}

            {open == true && (
                <Card className={classes.card1}>
                    <span className={classes.close}>
                        <CloseIcon onClick={handleClose}></CloseIcon>
                    </span>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Warren Buffett
                        </Typography>
                        <Typography color="textSecondary">
                            Warren Edward Bufffett is an American business magnate, investor , and philanthropist. He is currently the chairman and CEO of Berkshire Hathway. He is the one of the most successful
                            investors in the world and has a net worth of over $113 billion as of June 2022, making him the world's fifth-wealthiest person.
                        </Typography>
                    </CardContent>
                </Card>

            )}


            {open == true && (
                <Card className={classes.card1}>
                    <span className={classes.close}>
                        <CloseIcon onClick={handleClose}></CloseIcon>
                    </span>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Amelia Mary Earhart
                        </Typography>
                        <Typography color="textSecondary">
                            Amelia was an Earhart was an American avaiation pioneer and writer. Earhart was the first female avaitar to fly solo across the Atlantic Ocean. She is born ini 24 July 1897,
                            Atchison, Kansas, United States.
                        </Typography>
                    </CardContent>
                </Card>
            )}

            {open == true && (
                <Card className={classes.card1}>
                    <span className={classes.close}>
                        <CloseIcon onClick={handleClose}></CloseIcon>
                    </span>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Simone Biles
                        </Typography>
                        <Typography color="textSecondary">
                            Simone Arianne Biles is an American artistis gymast, her severn Olympic medals tie Shannon Miller for the most Olympic medals won by an American gymnast. She is considered one of
                            the greatest and most dominant gymnasts of all time.
                        </Typography>
                    </CardContent>
                </Card>
            )}

            <Grid container>
                <Grid item xs={6}>
                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} className={classes.btn}> DELETE</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" className={classes.btn1} startIcon={<CloudUploadIcon />} >UPLOAD </Button>
                </Grid>
            </Grid>

        </>
    );
}


