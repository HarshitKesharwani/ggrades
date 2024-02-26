import React from "react";
import "./Home.css";
import { RiAdminFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

import Nav from "../Navigation/Nav";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div class="area">
        <ul class="circles">
          <Nav />
          <div className="header">
            <h1 className="header-title"> Login/SignUp</h1>
            <h3 className="sub-head"> Tell Us about Yourself</h3>
          </div>
          <div className="card-container">
            <section className="card">
              <a>
                <RiAdminFill className="home-icon" />
              </a>

              <div className="card-details">
                <h3
                  className="card-title"
                  onClick={() => navigate("/loginteach")}
                >
                  Admin
                </h3>
              </div>
            </section>

            <section className="card" onClick={() => navigate("/loginstud")}>
              <a>
                <PiStudentFill className="home-icon" />
              </a>

              <div className="card-details">
                <h3 className="card-title">Student</h3>
              </div>
            </section>
            <section className="card" onClick={() => navigate("/loginteach")}>
              <a>
                <GiTeacher className="home-icon" />
              </a>

              <div className="card-details">
                <h3
                  className="card-title"
                  onClick={() => navigate("/loginstud")}
                >
                  Teacher
                </h3>
              </div>
            </section>
          </div>
          {/* //animation */}

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
