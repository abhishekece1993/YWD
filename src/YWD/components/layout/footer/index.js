import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        ...theme.mixins.gutters()
    },
    footer: {
        // backgroundColor: theme.palette.background.paper,
        // marginTop: "auto",
        // height:"3.5rem"
        backgroundColor: "purple",
        fontSize: "20px",
        color: "white",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%"
    }
}));
export function Footer(props) {
    const classes = useStyles();
    return (

        <React.Fragment>
            <Grid container>
                <Grid item xs={12} lg={12} sm={12}>
                    <footer className={classes.footer}>
                        <div className={classes.root} elevation={1}>
                            <Typography variant="h6" component="h3">
                                www.yourswebdesign.com
                            </Typography>
                            <Typography component="p">
                                @2019 All right reserved
                            </Typography>
                        </div>
                    </footer>
                </Grid>
            </Grid>
        </React.Fragment>


    )
}