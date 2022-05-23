import React, { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, reseterror] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const handleGoogleSingin = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithGoogle(email, password);
  };

  if (user || user1) {
    return navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = `Error: ${error.message}`;
  }

  if (reseterror) {
    toast(reseterror.message);
  }

  const handlepasswordReset = async () => {
    const Emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const email = emailRef.current.value;

    if (Emailregex.test(email)) {
      await sendPasswordResetEmail(email);
      toast("Email sent");
    } else {
      toast("Please Enter your Email Address");
    }
  };
  return (
    <div className="loginPage">
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
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

          <button className="loginPageBtn" type="submit">
            Login
          </button>
        </form>
        <p className="forgetLink">
          Forget Password?{" "}
          <button onClick={handlepasswordReset}>Click Here</button>
        </p>
        <p className="errorText">{errorElement}</p>
        <p className="registerLink">
          Don't have an account <Link to="/signup">Register Here</Link>
        </p>
        <button onClick={handleGoogleSingin} className="googleBtn">
          <div className="logo">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
            />
          </div>
          <p>Login With Google</p>
        </button>
      </div>
    </div>
  );
};
