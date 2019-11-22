import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import LineChart1 from "../Layout/Report/LineChart";
import LineChart2 from "../Layout/Report/LineChart2";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  },
  grid2: {
    padding: "0 15px !important",
    marginBottom: 15
  },
  cardCategory: {
    //color: grayColor[0],
    margin: "0",
    fontSize: "16px",
    marginTop: "0",
    paddingTop: "5px",
    marginBottom: "0",
    justifyContent: "auto"
  },
  cardTitle: {
    //color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize : "20px",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      //color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    },
    marginLeft: "auto",
    marginRight: "auto"
  },
  Card_PT3703A:{
    backgroundColor:"rgba(148, 0, 211,0.6)"
  },
  Card_PT3703B:{
    backgroundColor:"rgba(75, 0, 130, 0.6)"
  },
  Card_PT3801:{
    backgroundColor: "rgba(0, 0, 255, 0.6)"
  },
  Card_PT3802:{
    backgroundColor: "rgba(0, 255, 0, 0.6)"
  },
  Card_PT4706:{
    backgroundColor: "rgba(255, 255, 0, 0.6)"
  },
  Card_TE2601:{ 
    backgroundColor: "rgba(255, 127, 0, 0.6)"
  },
  Card_TE4702:{
    backgroundColor: "rgba(255, 0, 0, 0.6)"
  },
  Card_TE4706b:{
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  Card_TE7120:{
    backgroundColor: "rgba(255, 255, 100, 0.6)"
  },
  Card_TE8901A:{
    backgroundColor: "rgba(255, 100, 255, 0.6)"
  },
  Card_TCV8902:{
    backgroundColor: "rgba(100, 255, 255, 0.6)"
  },
  Card_PCV9601:{
    backgroundColor: "rgba(255, 200, 255, 0.6)"
  },
  Card_LCV9901:{
    backgroundColor: "rgba(255, 255, 200, 0.6)"
  }
});


export default function SimpleCard({reportdata, test1}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;



  return (
    <div>
        <Grid container justify="center"  spacing={5}>
          <Grid item className={classes.grid2} xs={12} sm={6} md={2}>
            <Card className={classes.Card_PT3703A}>
              <CardContent >
                <p className={classes.cardCategory} align="center">PT3703a</p>
                <h3 className={classes.cardTitle} align="center">
                    {reportdata.pt3703a}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={2}>
            <Card className={classes.Card_PT3703B}>
              <CardContent>
                <p className={classes.cardCategory} align="center">PT3703b</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.pt3703b}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={2}>
            <Card className={classes.Card_PT3801}>
              <CardContent>
                <p className={classes.cardCategory} align="center">PT3801</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.pt3801}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={2}>
            <Card className={classes.Card_PT3802}>
              <CardContent>
                <p className={classes.cardCategory} align="center">PT3802</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.pt3802}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={2}>
            <Card className={classes.Card_PT4706}>
              <CardContent>
                <p className={classes.cardCategory} align="center">PT4706</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.pt4706}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={2}>
            <Card className={classes.Card_TE2601}>
              <CardContent>
                <p className={classes.cardCategory} align="center">TE2601</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.te2601}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={3}>
            <Card className={classes.Card_TE4702}>
              <CardContent>
                <p className={classes.cardCategory} align="center">TE4702</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.te4702}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={3}>
            <Card className={classes.Card_TE4706b}>
              <CardContent>
                <p className={classes.cardCategory} align="center">TE4706b</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.te4706b}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={3}>
            <Card className={classes.Card_TE7120}>
              <CardContent>
                <p className={classes.cardCategory} align="center">TE7120</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.te7120}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={3}>
            <Card className={classes.Card_TE8901A}>
              <CardContent>
                <p className={classes.cardCategory} align="center">TE8901A</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.te8901a}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={3}>
            <Card className={classes.Card_TCV8902}>
              <CardContent>
                <p className={classes.cardCategory} align="center">TCV8902</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.tcv8902}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={3}>
            <Card className={classes.Card_PCV9601}>
              <CardContent>
                <p className={classes.cardCategory} align="center">PCV9601</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.pcv9601}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.grid2}  xs={12} sm={6} md={3}>
            <Card className={classes.Card_LCV9901}>
              <CardContent>
                <p className={classes.cardCategory} align="center">LCV9901</p>
                <h3 className={classes.cardTitle} align="center">
                  {reportdata.lcv9901}
                </h3>
                </CardContent>
            </Card>
          </Grid>
          <LineChart1 test={test1}/>
          <LineChart2 test={test1}/>
        </Grid>
        
    </div>
  );
}