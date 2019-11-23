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
        backgroundColor: theme.palette.background.paper,
        marginTop: "auto",
        height:"3.5rem"
    }
}));
export function Footer(props) {
    const classes = useStyles();
    return (

        <React.Fragment>
            <Grid container>
                <Grid item xs={12} lg={12} sm={12}>
                    <footer className={classes.footer}>
                        <Paper className={classes.root} elevation={1}>
                            <Typography variant="h5" component="h3">
                                www.yourswebdesign.com
                            </Typography>
                            <Typography component="p">
                                @2018 All right reserved
                            </Typography>
                        </Paper>
                    </footer>
                </Grid>
            </Grid>
        </React.Fragment>


    )
}