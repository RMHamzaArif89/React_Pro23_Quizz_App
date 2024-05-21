import React, { useEffect, useState } from 'react'

function QuizzTimer({totalTime,timeout}) {

    let[remainingTime,setRemainingTime]=useState(totalTime)

    useEffect(()=>{
       const timerInterval= setTimeout(timeout,totalTime)

        return()=>{clearTimeout(timerInterval)}

    },[totalTime,timeout])

    
    useEffect(()=>{
       const timer= setInterval(()=>{
            setRemainingTime(preTime=>preTime - 100)
            },100);

           return()=>{ clearInterval(timer)}

          },[])
// if(remainingTime<0){
    //   setRemainingTime(totalTime)
    // }
      
    

  return (
    <progress className='progress_bar' max={totalTime} value={remainingTime}/>
  )
}

export default QuizzTimer
