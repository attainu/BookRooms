import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import { RoomProvider } from "./Context";

import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Payment from "./pages/Payment"
import Confirm from "./pages/Confirm"

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:3000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }
  return (
    <RoomProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exaxt path="/contactus" component={ContactUs} />
        <PrivateRoute path="/Profile" component={Profile} />
        <PublicRoute path="/login" component={Login} />
        <Route exact path="/payment/" component={Payment}/>
        <Route exact path="/confirm/" component={Confirm}/>

      </Switch>
    </BrowserRouter>
    </RoomProvider>
  );
}

export default App;
