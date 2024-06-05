import React from 'react'
import five from './ffive.png'
function Offerings() {
  return (
    <section className='Offerings'>
        <div className="offup">
        <h2>Exciting features</h2>
        <div className="unlock">
        <h1>Unlock Your Potential with Our Featured Offerings</h1>
        </div>
        <p>Don't miss out on this opportunity to be part of something extraordinary. Join our waitlist now to <br /> secure your spot and be at the forefront of the future of learning.</p></div>
        <div className="offdown">
            <div className="downleft">
                <div className="dicover">
                    <h3>Discover learning from anywhere</h3>
                    <p>Why confine yourself to a lecture hall when you have the freedom to learn from the comfort of your home, the serenity of the beach, the creativity of a recording studio, or the familiarity of your own shop?</p>
                </div>
                <div className="learn">
                    <h3>Learn for prosperity</h3>
                    <p>Whether you're charting a career path, embracing fresh challenges, or acquiring new skills for professional growth, we're here to guide you toward achieving your goals.</p>
                </div>
            </div>
            <div className="downmiddle">
                <img src={five} alt="" />
            </div>
            <div className="downright">
                <div className="proficient">
                    <h3>Learn from the most proficient</h3>
                    <p>Our educators are meticulously chosen to ensure optimal learning outcomes. They are experts in their respective fields, dedicated to providing you with the quality education you deserve.</p>
                </div>
                <div className="experience">
                    <h3>Learning becomes a community experience</h3>
                    <p>Learners unite to exchange knowledge, collaborate, and elevate their comprehension. Your learning journey is shared, not solitary.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Offerings