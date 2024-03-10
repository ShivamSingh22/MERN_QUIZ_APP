import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {

    const inputRef = useRef(null)
    


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
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>

    </div>
  )
}