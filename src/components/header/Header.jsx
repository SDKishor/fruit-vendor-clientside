import React, { useEffect, useState } from "react";
import CustomLink from "../../hooks/CustomLink";
import "./header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  console.log(user);
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <header>
      <div className="logo">
        <span>IT</span> Tutor
      </div>
      <button onClick={toggleMenu} className="hambar">
        |||
      </button>
      {/* navigation bar */}
      <nav className={openMenu ? "" : "hidden"}>
        <div className="logo">
          Fruit's <span>Vendor</span>
        </div>
        <button onClick={toggleMenu} className="closeBtn">
          X
        </button>
        <div className="links">
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
        </div>

        {user ? (
          <button className="SignOutBtn" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <CustomLink className="loginBtn" to="/Login">
            Login
          </CustomLink>
        )}
      </nav>
    </header>
  );
};
