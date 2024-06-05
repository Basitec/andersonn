import React from 'react'
import'./App.css'
// import code1 from'./code1.jpeg'
// import code2 from'./code2.jpeg'
// import code3 from'./code3.jpeg'
// import code4 from'./code4.jpeg'
// import code5 from'./code5.jpeg'
// import code6 from'./code6.jpeg'

function Waitlist() {
  return (
    <section className='waitlist'>
        <h2>Why Join Our Waitlist?</h2>
        <h1>Get Ready to Revolutionize Your Learning Journey!</h1>
        <p>Explore our curated selection of featured courses and programs designed to ignite your passion for learning and propel you <br /> towards success. From cutting-edge technology to timeless artistry, we have something for every learner. Dive in and discover <br /> your next big breakthrough today!</p>
        <div className="codewrapper">
            <div className="code1">
                <span>Full Stack Development</span>
                <p>Website</p>
            </div>
            <div className="code2">
                <span>Product management</span>
                <p>Website</p></div>
            <div className="code3">
                <span>UI/UX Design</span>
                <p>Website</p></div>
            <div className="code4">
                <span>Digital Marketing</span>
                <p>Website</p></div>
            <div className="code5">
                <span>Data Science</span>
                <p>Website</p>
            </div>
            <div className="code6">
                <span>Web design</span>
                <p>Website</p>
            </div>

        </div>
    </section>
  )
}

export default Waitlist