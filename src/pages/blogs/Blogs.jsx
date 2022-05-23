import React from "react";
import "./blogs.css";

export const Blogs = () => {
  return (
    <div className="blogPage">
      <div className="questionContainer">
        <h3 className="question">
          Q1: Difference between authorization and authentication?
        </h3>
        <p className="answer">
          authorization is a process which varify what file, data a user can
          access. <br /> <br />
          authentication is a process of varifying who a user is.
        </p>
        <h3 className="question">
          Q2: Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <div className="answer">
          i am using firebase because it is easy to use, have many function
          beside authentication, popular with other web devloper. <br /> <br />
          there are many other option beside firebase like,
          <ul>
            <li>Auth0</li>
            <li>Mongodb</li>
            <li>passport</li>
            <li>Octa</li>
            <li>JSON web token</li>
          </ul>
          and More.
        </div>
        <h3 className="question">
          Q3: What other services does firebase provide other than
          authentication?
        </h3>
        <div className="answer">
          There are many services that firebase provide other then
          authentication. Like,
          <ul>
            <li>Firebase Hosting</li>
            <li>Firebase Database</li>
            <li>Firebase Storage</li>
            <li>Firebase app analysis</li>
            <li>Firebase app testing</li>
          </ul>
          and many other functions.
        </div>
      </div>
    </div>
  );
};
