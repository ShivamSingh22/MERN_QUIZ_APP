import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable.jsx'
import { useDispatch } from 'react-redux'


//importing actions
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'

const result = () => {

  const dispatch=useDispatch();

  function restart(){
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Lets Quiz!</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Total Quiz Points :</span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Total Questions :"</span>
          <span className='bold'>5</span>
        </div>
        <div className='flex'>
          <span>Total Attempts :</span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Total Earned Points :</span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Quiz Result</span>
          <span className='bold'>Pass</span>
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