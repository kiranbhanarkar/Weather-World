import Weather from './Components/Weather';
import './App.css';
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import store from './redux/store';
import { BrowserRouter, Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
     <Provider store={store}>
  
      <BrowserRouter>
        <NavbarComponent /> 
        <Switch>
        <Route path="/Home">
        <Weather />
          </Route>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route path="/Login">
             <Login />
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
