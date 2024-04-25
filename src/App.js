import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';
import Nav from './components/Nav';
import Listof from './components/Listof';
import Accepted from './components/Accepted';
import Rejected from './components/Rejected';
import Intrested from './components/Intrested';
import Details from './components/Details';
import Formvalidation from './components/Formvalidation';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/listof/:profileIdParam' element={<Listof />} />
            <Route path='/login' element={<Login />} />
            <Route path='/form' element={<Formvalidation />} />
            <Route path='/register' element={<Registration />} />
            <Route path="/accepted/:profileIdParam" element={<Accepted />} />
            <Route path="/intrested/:profileIdParam" element={<Intrested />} />
            <Route path="/rejected/:profileIdParam" element={<Rejected />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
export default App;
