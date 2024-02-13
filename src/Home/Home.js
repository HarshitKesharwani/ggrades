import React from 'react'
import "./Home.css"
import { RiAdminFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
export default function Home() {
  return (
    <>
    
    <div className='header'>
    <h1 className='header-title'> Login/SignUp</h1>
    <h3 className='sub-head'> Tell Us about Yourself</h3>
</div>
    <div className='card-container'>
        <section className="card">
            <a><RiAdminFill className='home-icon'/></a>
       
        <div className="card-details">
          <h3 className="card-title">Admin</h3>
        </div>
        </section>
        <section className="card">
            <a><PiStudentFill className='home-icon' /></a>
        
        
        <div className="card-details">
          <h3 className="card-title">Student</h3>
        </div>
        </section>
        <section className="card">
        <a><GiTeacher  className='home-icon'/></a>
       
        <div className="card-details">
          <h3 className="card-title">Teacher</h3>
        </div>
        </section>
        </div>
        
        </>
    
  )
}
