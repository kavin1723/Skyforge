import React from 'react'
import './agents.css'
import Phantom from '../../assets/phantom.jpg'

const Agents = () => {
  return (
    
    <div class="parent">
        <div class="div1">
            <h2 className='agent-text'>WHAT WE OFFER</h2>
            <img src={Phantom} alt="phantom"/>
        </div>
        <div class="div2">
            <h2 className='agent-color'>KNOW WHO WILL TAKE IT ALL</h2>
            <p className='agent-para'>Using our well-trained AI model, you can get the most accurate probability of which team is likely to win</p>
            <button className='agent-button'>SELECT HEROS HERE</button>
            <p className='agent-radiant'>Radiant :</p>
            <p className='agent-dire'>Dire :</p>
            <p className='agent-predict'>We Predict....</p>
            <h2 className='agent-sub-text'>DIRE WINS</h2>
            <h2 className='agent-para-two'>ESTIMATED LIKELIHOOD OF VICTORY FOR DIRE: 73%</h2>
        </div>
    </div>
  )
}


export default Agents