import React, { useState } from 'react'
import questions from '../questions'
import './css/quiz.css'

function Quiz() {
    let [answersId, setAnswersId] = useState([])
    const currentQuestionId = answersId.length;


    if (currentQuestionId > questions.length - 1) {
        return <div className="quizz_con_end">
            <img src="/images/trophy.gif" className='quizz_end_img' alt="" />
            <h1 className='quizz_end'>Your score is {answersId.length}</h1>
            <button className="quizz_end_button" onClick={()=>{setAnswersId([])}}>Play again</button>

        </div>
    }



    const sortedAnswers=[...questions[currentQuestionId].answers]
     sortedAnswers.sort(() => Math.random() - 0.5)

  
console.log(currentQuestionId)
console.log(answersId)
    let handleChoose=(answer)=>{
        setAnswersId([...answersId, answer])
    }


    
    return (
        <div className='quizz'>
            <div className="quizz_con">

                <div className="quizz_question">{questions[currentQuestionId].text}</div>
                {sortedAnswers.map((answer, id) => {
                    return <li className="quizz_answer" key={id} onClick={()=>{handleChoose(answer)}}>{answer}</li>

                })
                }


            </div>

        </div>
    )
}

export default Quiz
