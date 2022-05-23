import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./notFound.css";

export const NotFound = () => {
  return (
    <div className="notFound">
      <FontAwesomeIcon className="icon" icon={faTriangleExclamation} />
      <h2>404</h2>
      <p>Page Not Found</p>
    </div>
  );
};
