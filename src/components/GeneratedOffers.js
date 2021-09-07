import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { SaveBtn } from '../buttons/SaveBtn';
import { ResetBtn } from '../buttons/ResetBtn';
import AustraliaPriceBand from './AustraliaPriceBand';

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

    const urlService = `http://localhost:8080/pricebands`
    const tradingDay = '2021-09-03';

    return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={ classes.title} >
          <h1 >Generated Offers</h1>
        </Grid>
      </Grid>
      <Grid container justifyContent='flex-end'>
          <Grid item>
              <ResetBtn className={ classes.btn } tradingDay={ tradingDay } urlService={urlService}/>
              <SaveBtn className={ classes.btn } tradingDay={ tradingDay } urlService={urlService}/>
          </Grid>
      </Grid>
      <Grid container spacing={12}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
              <AustraliaPriceBand tradingDay={ tradingDay } urlService={ urlService }/>
          </Grid>
      </Grid>
    </div>
    )
}

export default GeneratedOffers;
