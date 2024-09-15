import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

import { Header } from './parts/header';
import { Main } from './parts/main';

import { Cart } from './routers/cart';
import { Log } from './routers/log';
import { Error } from './routers/error';
import { PanelAdmin } from './routers/panelAdmin';
import { Dashboard } from './routers/dashboard';

import store from './javascript/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Log' element={<Log />} />
          <Route path='/404' element={<Error />} />
          <Route path='/Admin' element={<PanelAdmin />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
      </Provider>
      
    </div>

  );
}

export default App;
