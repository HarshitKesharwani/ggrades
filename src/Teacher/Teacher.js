import React from 'react'
import Nav from '../Navigation/Nav'
import "./Teacher.css"
export default function Teacher() {
  return (
    <>
  <Nav/>
  <div className="sidebar">
    <div className='sub-container'>
    <h4 className='sub-title'>Classes</h4>

    </div >
    <div className='sub-container'>
      <h4 className='sub-title'> Students</h4>
    </div>
    <div className='sub-container'>
      <h4 className='sub-title'>Subjects</h4>
    </div>
    <div className='sub-container'>
      <h4 className='sub-title'>Result</h4>
    </div>
    </div>
  <div className='main-container'>
      <div className='inner-container'>
          <form>
          <label>
    Enter class name:
          <input type="text" name="name" />
  </label>
  <label>
    Enter year:
    <input type="number" name='year'/>
  </label>
  <input className='btn' type="Add class" value="Submit" />
          </form>
      </div>
    </div>

    </>

  )
}
