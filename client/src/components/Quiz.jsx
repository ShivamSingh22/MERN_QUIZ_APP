import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import {
  MoveNextQuestion,
  MovePreviousQuestion,
} from "../hooks/FetchQuestions";

import { PushAnswer } from "../hooks/setResult";

import {Navigate} from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";

const quiz = () => {

    const [check,setChecked] = useState(undefined);
    const result= useSelector((state) => state.result.result);
    const trace = useSelector((state) => state.questions.trace);
    const queue = useSelector((state) => state.questions.queue);
    const dispatch = useDispatch();

  useEffect(() => {
   console.log(result)
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      
      if(result.length<=trace){
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePreviousQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check)
  }

  //AFter answering the last question
 if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
 }


  return (
    <div className="container">
      <h1 className="title text-light">LET's QUIZ!</h1>

      {/* displaying questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        { trace > 0 ? <button className="btn prev" onClick={onPrev}>
          Prev
        </button>:<div></div>}
        
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default quiz;
