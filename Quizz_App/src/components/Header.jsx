import React, { useState } from 'react'
import './css/header.css'

function Header() {
    let[state,setState]=useState(true)

    return (
        <div className='header'>
            <div className='heading'>Quizz App</div>
            {
                state?
                <h1 onClick={()=>{setState(!state)}}>Start the quizz</h1>:
                <h2>Choose the Coorect Answer</h2>

            }
         
            <iframe src="https://giphy.com/embed/8zjxfpuutpJFRnlM2h"
             width="200" height="120" frameBorder="0" 
             className="giphy-embed" allowFullScreen></iframe><p>
           </p>


        </div>
    )
}

export default Header
