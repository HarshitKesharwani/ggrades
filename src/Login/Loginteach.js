import React from "react";
import "./logint.css";
import Nav from "../Navigation/Nav";
export default function Loginteach() {
  return (
    <>
      <Nav />
      <div className="tl1">
        <div className="tl2">
          <h2 className="head">LOGIN</h2>
          <h3 className="head">TEACHER</h3>
          <input className="ip" placeholder="Enter your mail" type="email" />
          <input className="ip" placeholder="Enter Password" type="password" />
          <br />
          <button className="btn"> NEXT</button>
        </div>
      </div>
    </>
  );
}
