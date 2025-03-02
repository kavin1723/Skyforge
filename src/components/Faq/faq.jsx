import React from 'react'
import './faq.css'
import picture_two from '../../assets/picture_two.png'
import picture_three from '../../assets/picture_three.png'  
import picture_four from '../../assets/picture_four.png'

const faq = () => {
  return (
    <div>
        <h1 className='faq'>FAQ</h1>
        <div class="parent-one">
            <div class="div-one">
                <img src={picture_two} alt="" className='images'/>
            </div>
            <div class="div2-two">
                <img src={picture_three} alt="" className='images' />
            </div>
            <div class="div3two">
                <img src={picture_four} alt="" className='images'/>
            </div>
        </div>
        <div class="parent-two">
            <div class="div-four">
                <h2 className='faq-head'>lorem</h2>
                <p className='faq-para'>Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Mauris velit turpis magnis auctor porttitor habitasse. 
                    Est montes sollicitudin litora, per molestie fusce vel primis.
                </p>
            </div>
            <div class="div-five">
                <h2 className='faq-head'>lorem</h2>
                <p className='faq-para'>Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Mauris velit turpis magnis auctor porttitor habitasse. 
                    Est montes sollicitudin litora, per molestie fusce vel primis.
                </p>
            </div>
            <div class="div-six">
                <h2 className='faq-head'>lorem</h2>
                <p className='faq-para'>Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Mauris velit turpis magnis auctor porttitor habitasse. 
                    Est montes sollicitudin litora, per molestie fusce vel primis.
                </p>
            </div>
        </div>
    
    </div>
  )
}

export default faq
