import React from 'react';
import './App.scss';
import {BrowserRouter , Switch , Route, Redirect } from 'react-router-dom';
/*------------importing the components--------------*/
import Header from './components/Header/Header';
import Latest from './components/Latest/Latest';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Latest}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
