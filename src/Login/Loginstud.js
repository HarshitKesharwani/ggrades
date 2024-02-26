import React, { useState } from "react";
import Nav from "../Navigation/Nav";
import "./logint.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Loginstud() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Nav />
      <div className="tl1">
        <div className="tl2">
          <h2 className="head">LOGIN</h2>
          <h3 className="head">STUDENT</h3>
          <form action="POST">
            <input
              className="ip"
              placeholder="Enter your mail"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="ip"
              placeholder="Enter Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <br />
            <button className="btn" onClick={submit}>
              NEXT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
