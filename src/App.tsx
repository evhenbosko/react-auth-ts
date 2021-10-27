import React from 'react';
import NavBar from './components/navbar/NavBar'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import Me from'./components/me/Me'
import { BrowserRouter ,Route} from 'react-router-dom';
import './style/style.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
        <main className="form-signin">
          <Route path='/' exact component={Me}/>
          <Route path='/login'component={Login}/>
          <Route path='/SignUp'component={SignUp}/>
         
        </main>    
    </BrowserRouter>
    </div>
  );
}

export default App;
