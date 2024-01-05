import React, { useEffect } from 'react'
import {useState} from 'react'

const Question = ({data}) => {

    const [questionNumber,setquestionNumber]=useState(0);
    const [score,setScore]=useState(0);
    const [time,setTime]=useState(10);
    // console.log(data)
   
    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTimer) => prevTimer - 1);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    useEffect(() => {
      if (time === 0) {
        // Move to the next question when the timer reaches 0
        setquestionNumber((prevIndex) => prevIndex + 1);
        setTime(5);
      }
    }, [time]);

    const handleQuestions=(e)=>{
      console.log(e.target.textContent);
      console.log(data[questionNumber].answers[data[questionNumber].correct_answer])
        if(e.target.textContent==data[questionNumber].answers[data[questionNumber].correct_answer]){
            setScore(score+1);
        }
       setquestionNumber(questionNumber+1);
       if(questionNumber<10){
        console.log(score);
       }
    }
    
    // console.log(data)
  return (
    <div className='Question-set'>
      
      {
        data.length!=0 && questionNumber<10?
      
      
        <>
            <h1>Questions No:{questionNumber+1} </h1>
            <p>{data[questionNumber].question}</p>
           <br/>
           <p>Remaining Time:{time}</p>
            <ul>
              <li onClick={handleQuestions}>{data[questionNumber].answers.answer_a}</li>
              <li onClick={handleQuestions}>{data[questionNumber].answers.answer_b}</li>
              <li onClick={handleQuestions}>{data[questionNumber].answers.answer_c}</li>
              <li onClick={handleQuestions}>{data[questionNumber].answers.answer_d}</li>
              <li onClick={handleQuestions}>{data[questionNumber].answers.answer_e}</li>
              <li onClick={handleQuestions}>{data[questionNumber].answers.answer_f}</li>
            </ul> 
            <br/>
      <button onClick={handleQuestions}>skip question</button>
        </>:
        <div className='score'>
          <h2>Quiz End</h2>
          <p>Your Score</p>
          <p>{score}/10</p>
        </div>
      
      
      
      }
     
       
      
    </div>
  )
}

export default Question
