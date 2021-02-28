import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container justify='center'>
                <Grid item>
                    Copyright &copy; Electronic Shop
                 </Grid>
            </Grid>

        </React.Fragment>


    )
}

export default Footer
