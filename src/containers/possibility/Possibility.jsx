import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility"></img>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias molestiae minus? Accusantium similique, delectus impedit voluptatibus ullam, aspernatur consectetur culpa ipsum mollitia non neque alias fugit enim blanditiis inventore.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility