import React from 'react'
import { useParams } from 'react-router-dom';

export const MockTestList = () => {
  const {testCode} = useParams();
  console.log('testCode:', testCode)
  return (
    <div>MockTestList {testCode}</div>
  )
}
