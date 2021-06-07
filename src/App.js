import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AlertState>
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </div>
      <Alert />
    </Router>
    </AlertState>
  );
}

export default App;
