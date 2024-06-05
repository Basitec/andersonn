import React from 'react'
import './App.css'
function Banner() {
  return (
    <section className='Banner'>
        <div className="Bannerleft">
            <h2>One of the best learning management system tools available</h2>
            <p>Our comprehensive eLearning platform is on a mission to empower <br />individuals like you with expert-led classes, personalized mentorship, and <br /> seamless connections to job opportunities.</p>
        </div>
        <div className="Bannerright">
            <form action="">
                <h2>Be part of McAnderson’s early users. Join the waitlist now!</h2>
                <p>Enter the fields below to get started</p>
                <input type="text" placeholder='Full name' />
                <input type="email"  placeholder='Enter Email'/>
                <button>Join Waitlist</button>
            </form>
        </div>
    </section>
  )
}

export default Banner