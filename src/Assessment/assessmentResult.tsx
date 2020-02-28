import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import RatingBar from './ratingBar';

const MAX_SCORE = 5;

const useStyles: any = makeStyles(theme => ({
  root: {
    padding: '10% 20%',
    color: '#fff',
    background:
      'transparent linear-gradient(119deg, #182343 0%, #1D53B9 25%, #0F57DD 44%, #0F49B6 69%, #0F1C3B 100%) 0% 0% no-repeat padding-box',
    minHeight: '100vh',
  },
  logo: {
    width: 150,
    position: 'absolute',
    top: 50,
    left: 50,
  },
  container: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    color: '#fff',
  },
  donutWrapper: {
    position: 'relative',
    marginBottom: 100,
  },
  donutTxt: {
    position: 'absolute',
    fontSize: '2rem',
    color: '#588BFF',
  },
  resTxt: {
    fontSize: 21,
  },
}));

export default ({ history, location }: any) => {
  const classes = useStyles();

  const [res, setRes]: any = useState({});
  const [dataDoughnut, setDataDoughnut]: any = useState({
    datasets: [
      {
        data: [100],
        backgroundColor: ['#58A5FF', '#252F56'],
      },
    ],
  });

  const loadResult = async (result: any) => {
    setRes(result);
    setDataDoughnut({
      datasets: [
        {
          borderColor: '#363A42',
          boredrAlign: 'center',
          borderWidth: 0,
          outerRadius: '100%',
          innerRadius: '99%',
          cornerRadius: '1%',
          padAngle: '10',
          data: [result.avgScore * 100, 100 * (1 - result.avgScore)],
          backgroundColor: ['#5D8FFF', '#002676'],
          weight: 100,
        },
      ],
    });
  };

  useEffect(() => {
    if (location.hash && location.hash.substring(1).startsWith('r=') && location.hash.substring(3)) {
      try {
        const res: any = JSON.parse(location.hash.substring(3).replace(/%22/g, '"').replace(/%20/g, ' '));
        loadResult(res);
      } catch (e) {
        // history.push('#');
        console.log(location.hash.substring(3).replace(/%22/g, '"').replace(/%20/g, ' '));
        console.log(e);
      }
    } else {
      history.push('#');
    }
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={12}>
          <Grid item md={12}>
            <div className={classes.donutWrapper}>
              <Typography
                className={classes.donutTxt}
                style={{ top: '-10%', left: '49%' }}
                component="span"
              >
                0
              </Typography>
              <Typography
                className={classes.donutTxt}
                style={{ right: '20%', top: '50%' }}
                component="span"
              >
                25
              </Typography>
              <Typography
                className={classes.donutTxt}
                style={{ bottom: '-15%', left: '48%' }}
                component="span"
              >
                50
              </Typography>
              <Typography
                className={classes.donutTxt}
                style={{ left: '20%', top: '50%' }}
                component="span"
              >
                75
              </Typography>
              <div
                className={classes.donutTxt}
                style={{ top: '30%', left: '38%', textAlign: 'center' }}
              >
                <Typography
                  style={{ fontSize: 28, fontWeight: 100, color: '#fff' }}
                  component="h3"
                >
                  Your Score
                </Typography>
                <Typography
                  style={{ fontSize: 82, color: '#F8D618' }}
                  component="h3"
                >
                  {res.avgScore && (res.avgScore * 100).toFixed(0)}%
                </Typography>
              </div>
              <Doughnut
                data={dataDoughnut}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  cutoutPercentage: 80,
                  tooltips: { enabled: false },
                }}
              />
            </div>
          </Grid>
          <Grid item md={12} style={{ textAlign: 'center' }}>
            <Typography className={classes.resTxt}>
              {res.name}, your overall score is {(res.avgScore * 100).toFixed(0)}%
              .
            </Typography>
            <Typography className={classes.resTxt}>
              High potentials score between 81-100.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid item md={12}>
            <Typography style={{ marginTop: 50, marginLeft: 70, marginBottom: 10, fontSize: 26 }}>
              Analysis
            </Typography>
          </Grid>
          <Grid
            item
            md={12}
            style={{
              marginLeft: 50,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {res.data &&
              res.data.map(
                ({ value, label }: any, i: number) => (
                 <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '10px 50px',
                      margin: '0 20px 10px 20px',
                      backgroundColor: 'rgba(37, 47, 86, .15)',
                      paddingBottom: 25,
                    }}
                    key={i}
                  >
                    <div style={{ width: 350, position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                      <Typography
                        style={{
                          fontSize: 28,
                          marginTop: 20,
                          marginBottom: 10,
                        }}
                        component="h3"
                      >
                        {label}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 28,
                          marginTop: 20,
                          marginBottom: 10,
                        }}
                        component="h3"
                      >
                        {value} / 10
                      </Typography>
                    </div>
                    <RatingBar value={parseInt(value)} />
                  </div>
                )
              )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
