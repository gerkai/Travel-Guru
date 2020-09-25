import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link } from "react-router-dom";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const gitProvider = new firebase.auth.GithubAuthProvider();
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: "",
    email: "",
  });
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        setUser(signedInUser);
      });
  };

  const handleFacebookLogin = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      });
  };

  const handleGitHubLogin = () => {
    firebase
      .auth()
      .signInWithPopup(gitProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      });
  };

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (event) => {
    console.log(user.email, user.password);
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email };
          setLoggedInUser(signedInUser);
          history.replace(from);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        });
    }

    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        });
    }
    event.preventDefault();
  };

  return (
    <div className="App">
      <h2>Authentication System</h2>
      <form onSubmit={handleSubmit} action="">
        <br />
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          onBlur={handleBlur}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="submit" />
        <br />
        <br />
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <br />
          <button onClick={handleFacebookLogin}>Facebook Sign in</button>
          <br />
          <button onClick={handleGitHubLogin}>Sign in GitHub</button>
        </div>

        <br />
        <Link to="/signup">Don't have an account?</Link>
      </form>
    </div>
  );
};

export default Login;
