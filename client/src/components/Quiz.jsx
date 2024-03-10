import React from 'react'
import Questions from './Questions'


const quiz = () => {

    
  return (
    <div className='container'>
        <h1 className='title text-light'>LET's QUIZ!</h1>
        
        {/* displaying questions */}
        <Questions/>

    </div>
  )
}

export default quiz