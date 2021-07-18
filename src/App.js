import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter , Switch , Route, Redirect } from 'react-router-dom';
/*------------importing the components--------------*/
import Header from './components/Header/Header';
import Latest from './components/Latest/Latest';
import Footer from './components/Footer/Footer';
import All from './components/All/All';

function App() {
  const [nav, setNav] = useState({'home':true , 'all':false , 'contact':false , 'other':false})
  return (
    <div>
      <BrowserRouter>
        <Header nav={nav} setNav={setNav}/>
        <Switch>
          <Route exact path="/" component={Latest}/>
          <Route exact path="/all" component={All}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
