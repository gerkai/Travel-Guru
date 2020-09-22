import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
// import Header from 
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Hotel from './components/Hotel/Hotel';

export const UserContext = createContext();

function App() {

  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/book/:placeTypeName">
              <Book />
            </Route>

          

            <PrivateRoute path="/hotel">
              <Hotel />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;










// import { Switch } from '@material-ui/core';
// import { Book, Router } from '@material-ui/icons';
// import React, { createContext, useState } from 'react';
// import { Route } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// export const UserContext = createContext();

// function App() {
  
//   return (
//            <div>
//              <Home></Home>
//            </div>
//   );
// }

// export default App;
