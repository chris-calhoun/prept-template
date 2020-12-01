import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Routes from '../helpers/Routes';

class App extends React.Component {
  render() {
    return (
      <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </div>
      </>
    );
  }
}

export default App;
