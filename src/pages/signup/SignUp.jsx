import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

export const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const ConfirmPasswordRef = useRef("");
  const [errorText, SetErrorText] = useState();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const handleSingup = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const ConfirmPassword = ConfirmPasswordRef.current.value;
    const displayName = nameRef.current.value;
    if (password !== ConfirmPassword) {
      SetErrorText("Your confirm password did not match");
      return;
    }
    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName });
    navigate("/");
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="loginPage">
      <div className="login">
        <h2>Register</h2>
        <form onSubmit={handleSingup} action="">
          <input
            ref={nameRef}
            type="text"
            placeholder="Username"
            name="UserName"
            required
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            ref={ConfirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
          />

          <p className="errorText">{errorText}</p>
          <button className="loginPageBtn" type="submit">
            Register
          </button>
        </form>
        <p className="registerLink">
          Already have an account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
