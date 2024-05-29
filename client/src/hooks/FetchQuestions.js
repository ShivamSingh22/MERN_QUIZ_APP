import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Actions from '../redux/question_reducer';
import { getServerData } from "../helper/helper";

/* fetch api data and set value to store */
export const useFetchQuestion = () => {

  const dispatch = useDispatch();
  
  const [fetchData, setFetchData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setFetchData((prev) => ({ ...prev, isLoading: true }));

    // Async function to fetch data
    (async () => {
      try {
        const [{questions,answers}]= await getServerData(`${import.meta.env.VITE_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data)
        console.log({questions,answers})
        if (questions.length > 0) {
          setFetchData((prev) => ({ ...prev, isLoading: false }));
          setFetchData((prev) => ({ ...prev, apiData: {questions,answers}}));

          // Dispatch an action
          dispatch(Actions.startExamAction({question : questions,answers}));
        } else {
          throw new Error("No questions available");
        }
      } catch (error) {
        setFetchData((prev) => ({ ...prev, isLoading: false }));
        setFetchData((prev) => ({ ...prev, serverError: error }));
      }
    })(); // This will help execute the async function
  }, [dispatch]);

  return [fetchData, setFetchData];
};

// MoveAction Dispatch Function
export const MoveNextQuestion = () => async(dispatch) => {
  try{
    dispatch(Actions.moveNextAction());
  }
  catch(error) {
    console.log(error)
  }
}

export const MovePreviousQuestion = () => async(dispatch) => {
  try{
    dispatch(Actions.movePreviousAction());
  }
  catch(error) {
    console.log(error)
  }
}