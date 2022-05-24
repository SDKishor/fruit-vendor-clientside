import React from "react";
import "./blogs.css";

export const Blogs = () => {
  return (
    <div className="blogPage">
      <div className="questionContainer">
        <h3 className="question">
          Q1: Difference between Javascript and node js?
        </h3>
        <p className="answer">
          Javascript is a programming language that run in browser <br /> <br />
          Node js is a javascript runtime environment that lets Javascript to be
          run on the server-side.
        </p>
        <h3 className="question">
          Q2: When should you use nodejs and when should you use mongodb?
        </h3>
        <div className="answer">
          when we want to write some kind of stand alone program or server then
          we should go for Nodejs <br /> <br />
          if i want to store data in a way that doesn't need very complex
          relation with each other then we should go for mongodb database.
        </div>
        <h3 className="question">
          Q3: Differences between sql and nosql databases.?
        </h3>
        <div className="answer">
          Sql database are table-based. it is better for data relationship. it
          is batter for multi row transections
          <br /> <br />
          Nosql databse are document. Nosql is batter for unstuctured data like
          json. it is not good for complex data relationship.
        </div>
        <h3 className="question">
          Q3: What is the purpose of jwt and how does it work?
        </h3>
        <div className="answer">
          JSON Web Token is a way to share security information between two
          parties like a clint and a server. it is used to protect data and deny
          data access to unauthorized user
        </div>
      </div>
    </div>
  );
};
