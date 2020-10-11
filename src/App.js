import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
