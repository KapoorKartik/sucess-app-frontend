import React from 'react'

export const Question = ({questionObj}) => {
    // console.log('questionObj:', questionObj)
    const q = questionObj?.question;
    const options = questionObj?.options;
  return (
    <div>Question : {q}</div>
  )
}
