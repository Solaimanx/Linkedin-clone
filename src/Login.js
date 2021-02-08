import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  // useState to track if there a data on this input + or store the input data in state so we can pass the data in firebase
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  // dispatch will push the login info to the database in firebase
  const dispatch = useDispatch();

  // This event will happen after clicking on "signIn" button ( because we are using onClick)
  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        })
      );
      
    }).catch(error => alert(error));
  };
  //
  const register = () => {
    if (!name) {
      return alert("Please enter a full Name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          Placeholder="Full Name (required if registering"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          Placeholder="Profile pic URL (optional) "
          type="email"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          Placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          Placeholder="password"
          type="password"
        />

        <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a member ?{"  "}
        <span className="Login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
