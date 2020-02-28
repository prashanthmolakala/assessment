import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import Assessment from './Assessment';

import theme from './common/styles/theme';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Assessment} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
