import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer';


export default function Home() {

    const inputRef = useRef(null);
    const dispatch=useDispatch();

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>LET's QUIZ!</h1>

        <ol>
            <li>No of Questions- 10.</li>
            <li>Points per Question- 10</li>
            <li>Time per Question- 15 seconds</li>
            
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}