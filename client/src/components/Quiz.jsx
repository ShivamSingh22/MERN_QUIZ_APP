import React, { useEffect } from 'react'
import Questions from './Questions'

import {useSelector} from 'react-redux'


const quiz = () => {

    const state=useSelector(state => state)

    useEffect(()=>{
        console.log(state)
    })

    function onNext(){
        console.log('on-next')
    }

    function onPrev(){
        console.log('go back')
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>LET's QUIZ!</h1>
        
        {/* displaying questions */}
        <Questions/>

        <div className='grid'>
             <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>

    </div>
  )
}

export default quiz