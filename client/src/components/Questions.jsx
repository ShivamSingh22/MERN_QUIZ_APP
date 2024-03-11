import React, { useEffect, useState } from 'react'


import { useSelector } from 'react-redux';
// Custom HOOK
import { useFetchQuestion } from '../hooks/FetchQuestions';


const Questions = () => {

  const [checked,setChecked]=useState(undefined);
  const [{isLoading,apiData,serverError}]=useFetchQuestion();


  const questions=useSelector(state => state.questions.queue[state.questions.trace])
  const trace= useSelector(state => state.questions.trace)
    useEffect(()=>{
        console.log(trace)
    })

  function onSelect(){
   //console.log('')
  }

  if(isLoading) return <h3 className='text-light'>isLoading</h3>
  if(serverError) return <h3 className='text-light'>{serverError} || "Unknown error" </h3>

  return (
    <div className='questions'>
      <h2 className='text-light'>{questions?.question}</h2>
      {/* this question mark after question tells that 
      "we only want to access the property when we have that property" */}

      <ul key={questions?.id}>
        {
          questions?.options.map((q, i) => (
        <li key={i}>
          <input
           type="radio" 
           value={false}
           name='options'
           id={`q${i}-option`}
           onChange={onSelect()}
           />

           <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
           <div className='check '></div>
        </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Questions