import React, { createContext, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import  Admin from './component/Admin/Admin';
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import EventItem from './component/EventItem/EventItem';
import AddEvent from './component/AddEvent/AddEvent';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Router>
        <Switch>

          <Route path="/home">
             <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path='/addEvent'>
                <AddEvent></AddEvent>
            </Route>

          <Route path="/eventItem">
             <EventItem></EventItem>
          </Route>

          <PrivateRoute path="/registration/:eventId">
             <Registration></Registration>
          </PrivateRoute>

          <Route exact path="/">
             <Home></Home>
          </Route>

          <Route exact path="*">
              <Admin></Admin>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
