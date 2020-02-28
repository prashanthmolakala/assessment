import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';
import React, { useEffect, useState } from 'react';

import DResult from './assessmentResult';
import egen_logo from './egen_logo.png';

const useStyles: any = makeStyles(theme => ({
  logo: {
    width: 150,
    height: 40,
    position: 'fixed',
    top: 56,
    left: 63,
  },
  container: {
    padding: '12% 15%',
    paddingBottom: 45,
    background:
      'transparent linear-gradient(119deg, #182343 0%, #1D53B9 25%, #0F57DD 44%, #0F49B6 69%, #0F1C3B 100%) 0% 0% no-repeat padding-box',
    textAlign: 'center',
    color: '#fff',
    minHeight: '100vh',
  },
  question: {
    fontSize: 28,
    fontWeight: 100,
    textTransform: 'uppercase',
    padding: theme.spacing(3, 0),
  },
  ansBtn: {
    fontSize: 14,
    padding: theme.spacing(1.5, 4),
    color: '#fff',
    background: '#1A4092',
  },
  actionBtn: {
    borderRadius: 23,
    borderColor: '#fff',
    margin: '0 20px',
    width: 185,
    height: 45,
    fontSize: 14,
  },
  textField: {
    width: 287,
  },
  borderLine: {
    alignSelf: 'center',
    width: 300,
    borderTop: '1px solid #009DFF',
  },
  input: {
    color: '#fff',
    '&::before': {
      borderColor: '#fff',
    },
    '&::after': {
      borderColor: '#fff',
    },
  },
  skillsWrapper: {
    margin: '20px 0',
  }
}));

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#134DEA',
  },
  barColorPrimary: {
    backgroundColor: '#193D8B',
  },
})(LinearProgress);

export default ({ history, location }: any) => {
  const classes = useStyles();

  const [page, setPage] = useState('details');
  const [skills, setSkills]: any = useState([{
    label: '',
    value: '',
  }]);
  const [name, setName]: any = useState('');

  const handleInpChange = (i: number, key: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    skills[i][key] = event.target.value;
    setSkills([
      ...skills,
    ]);
  };

  const addSkill = () => {
    setSkills([
      ...skills,
      {
        label: '',
        value: '',
      }
    ])
  }

  const handleRemove = (i: number) => () => {
    skills.splice(i, 1);
    setSkills([...skills]);
  }

  const getAvgScore = () => {
    return skills.reduce((acc: number, { value }: any) => (acc + parseInt(value)), 0) / (skills.length * 10);
  }

  const handleInpSubmit = async () => {
    history.push(`#r=${JSON.stringify({ name, data: skills.filter(({ label, value }: any) => label && value), avgScore: getAvgScore() })}`);
  };

  useEffect(() => {
    if (location.hash) {
      if (location.hash.substring(1).startsWith('r=')) {
        setPage('result');
      } else {
        setPage('details');
      }
    }
  }, [location.hash]); // eslint-disable-line

  return (
    <div>
      <div>
        <CssBaseline />
        <img alt='egen logo' src={egen_logo} className={classes.logo} />
        <div className={page !== 'result' ? classes.container : ''}>
          {page === 'details' && (
            <div
              style={{ display: 'flex', flexDirection: 'column', color: '#fff' }}
            >
              <div className={classes.borderLine} />
              <Typography
                style={{ fontSize: 24, padding: '20px 0' }}
                component="h3"
              >
                ASSESSMENT ENTRY
              </Typography>
              <div className={classes.borderLine} />
              <div
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TextField
                  required={true}
                  label="Name"
                  className={classes.textField}
                  value={name}
                  onChange={({ target: { value } }) => setName(value)}
                  margin="normal"
                  InputProps={{ className: classes.input }}
                  InputLabelProps={{ style: { color: '#fff' } }}
                />

                {
                  skills.map((skill: any, i: number) => (
                    <div key={i} className={classes.skillsWrapper}>
                      <Input className={classes.input} placeholder="Label" value={skill.label} onChange={handleInpChange(i, 'label')} />
                      : 
                      <Input style={{ marginLeft: 10, width: 60 }} className={classes.input} placeholder="Value" type="number" inputProps={{ min: "1", max: "10", step: "1" }} value={skill.value} onChange={handleInpChange(i, 'value')} />
                      <Delete onClick={handleRemove(i)}/>
                    </div>
                  ))
                }
                
                <Button
                  onClick={addSkill}
                  className={classes.actionBtn}
                  variant="outlined"
                  color="default"
                >Add Skill</Button>
              </div>
              <div
                style={{ display: 'flex', alignSelf: 'center', margin: '75px' }}
              >
                <Button
                  disabled={!(name)}
                  onClick={handleInpSubmit}
                  className={classes.actionBtn}
                  variant="outlined"
                  color="default"
                >
                  VIEW CERTIFICATE
                </Button>
              </div>
            </div>
          )}
          <div>
            {page === 'result' && <DResult history={history} location={location} />}
          </div>
        </div>
        <div style={{ marginTop: -70, color: '#6699FC', textAlign: 'center' }}>
          <Typography style={{ padding: '5px 100px',fontSize: 12 }} component="h6">
            Egen’s assessment is to analyze the ability of candidate’s knowledge and proficiency. This score report is just to visualize the candidate’s performance by Egen. Any other queries can be redirected to concerned person in contact at Egen.
          </Typography >
          <Typography style={{ fontSize: 12 }} component="h6">
            © 2000-2020 Egen Solutions, Inc. • All Rights Reserved •
          </Typography>
        </div>
      </div>
    </div>
  );
};
