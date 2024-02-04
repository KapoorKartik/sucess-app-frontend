import React from 'react'
import { useLocation } from 'react-router-dom'
import { Question } from '../components/Question copy'

export const SeeAnswers = () => {
    const {state}= useLocation()
    console.log('state:', state)
  return (
    <>
      <div>SeeAnswers</div>
      <Question
        questionObj={state?.qArr[0]}
        // setAnsArr={setAnsArr}
        currentQ={0}
        ansArr={state?.ansArr}
      />
    </>
  );
}
