import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SaveBtn } from '../buttons/SaveBtn';
import { ResetBtn } from '../buttons/ResetBtn';
import AustraliaPriceBand from './AustraliaPriceBand';
import { ClearBtn } from '../buttons/ClearBtn';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    btn: {
        marginLeft: "10px",
    },
    title: {
        backgroundColor: "#E4E7EA",
        marginBottom: "5px",
    }
  }));
export const GeneratedOffers = () => {
    const classes = useStyles();

    const urlService = `http://localhost:8080/pricebands/`
    const tradingDay = '2021-09-02';

    return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={ classes.title} >
          <h1 >Generated Offers</h1>
        </Grid>
      </Grid>
      <Grid container>
          <Grid item xs={12} sm={4} md={3} lg={2}>
              <SaveBtn className={ classes.btn } urlService={urlService}/>
              <ResetBtn className={ classes.btn } urlService={urlService}/>
              <ClearBtn className={ classes.btn } urlService={urlService}/>
          </Grid>
      </Grid>
      <Grid container >
          <Grid item xs={12} sm={6}>
              <AustraliaPriceBand tradingDay={ tradingDay } />
          </Grid>
      </Grid>
    </div>
    )
}

export default GeneratedOffers;
