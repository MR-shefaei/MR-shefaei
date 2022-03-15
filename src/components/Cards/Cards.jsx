import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import  CountUp  from 'react-countup';
import cx from 'classnames';


const Cards = ({data : {confirmed,deaths,recovered,lastUpdate}}) => {
      if (!confirmed)
         return "Loding ...."
    return ( 
        <div className={styles.container}>
            <Grid container  justifyContent = "center">
                <Grid item component = {Card}  xm={3}  className={cx(styles.card , styles.inficted)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbottom ="true">Inficted</Typography>
                        <Typography varaint="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=","/></Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varinat = "body2">Numober of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}   xm={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbottom>Recovered</Typography>
                        <Typography varaint="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varinat = "body2">Numober of recoveries from  COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}  xm={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterbottom>Deaths</Typography>
                        <Typography varaint="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varinat = "body2">Numober of deaths caused  by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        
     );
}
 
export default Cards;