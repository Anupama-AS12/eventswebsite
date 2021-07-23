import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Payment from "./components/Payment";
import Events from "./components/Events";
import Content from "./components/Content";
import ContactUs from "./components/ContactUs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import fire from "./components/fire";

function App(props) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-founds":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Redirect to="/header" />
        </Route>
        <Route exact path="/header">
          <Header />
        </Route>
        <Route exact path="/login" component={Login}>
          {user ? (
            <Route exact path="/content">
              <Content />
            </Route>
          ) : (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          )}
        </Route>
        <Route exact path="/signup">
          <Signup
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignup={handleSignup}
            emailError={emailError}
            passwordError={passwordError}
          />
        </Route>
        <Route exact path="/content">
          <Content />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="*" render={() => "404 not found"} />
      </Switch>
    </Router>
  );
}

export default App;
