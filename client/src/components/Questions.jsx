import React, { useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux';
// Custom HOOK
import { useFetchQuestion } from '../hooks/FetchQuestions';

import { updateResult } from '../hooks/setResult';


const Questions = ({onChecked}) => {

  const [checked,setChecked]=useState(undefined);
  const [{isLoading,apiData,serverError}]=useFetchQuestion();

  const result =useSelector(state=> state.result.result)
  const questions=useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch=useDispatch()
  //useSelector(state=> console.log(state));

  const trace= useSelector(state => state.questions.trace)

    useEffect(()=>{
      //console.log({trace,checked})
       dispatch(updateResult({trace, checked}))
    },[checked])

  function onSelect(i){
      onChecked(i)
      setChecked(i)
      dispatch(updateResult({trace, checked}))
  }

  if(isLoading) return <h3 className='text-light'>isLoading</h3>
  if(serverError) return <h3 className='text-light'>{serverError.message} || "Unknown error" </h3>

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
           onChange={() => onSelect(i)}
           />

           <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
           <div className={`check ${result[trace] == i ? 'checked':''}`}></div>
        </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Questions