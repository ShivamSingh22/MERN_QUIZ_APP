import React, { useEffect } from 'react'
import '../styles/Result.css'
import {Link, useSearchParams} from 'react-router-dom'
import ResultTable from './ResultTable.jsx'
import { useDispatch, useSelector } from 'react-redux'

import { attempts_Number,earnPoints_Number,flagResult } from '../helper/helper'


//importing actions   
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { usePublishResult } from '../hooks/setResult'

const result = () => {

  const dispatch=useDispatch();
  const {questions :{queue,answers},result:{userId,result}}=useSelector(state=>state)

  useEffect(()=>{
    console.log(flag)
    console.log(attempts)
    console.log(earnPoints)
  })

  const totalPoints=queue.length*10;
  const attempts= attempts_Number(result)
  const earnPoints=earnPoints_Number(result,answers,10)
  const flag=flagResult(totalPoints,earnPoints)

  console.log({result,username:userId,attempts,points:earnPoints,achieved:flag?"Passed":"Failed"});
  /**store user result */
  usePublishResult({
    result,
    username : userId,
    attempts,
    points: earnPoints,
    achieved : flag ? "Passed" : "Failed",
  })

  function restart(){
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Lets Quiz!</h1>

      <div className='result flex-center'>
      <div className='flex'>
          <span>Username :</span>
          <span className='bold'>{userId || ""}</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points :</span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Questions :"</span>
          <span className='bold'>{queue.length || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Attempts :</span>
          <span className='bold'>{attempts || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Earned Points :</span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Quiz Result</span>
          <span style={{color:`${flag? "#2aff95":"#ff2a66"}`}} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>

      </div>
      <div className='start'>
        <Link className='btn' to={'/'} onClick={restart}>Restart</Link>
      </div>
      <div className="container">
        <ResultTable/>
        </div>
    </div>
  )
}

export default result