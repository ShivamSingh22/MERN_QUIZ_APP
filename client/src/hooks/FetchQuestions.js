import { useEffect, useState } from "react";
import data from "../database/data";
import { useDispatch } from "react-redux";
import * as Actions from '../redux/question_reducer';

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
        let question = await data;

        if (question.length > 0) {
          setFetchData((prev) => ({ ...prev, isLoading: false }));
          setFetchData((prev) => ({ ...prev, apiData: question }));

          // Dispatch an action
          dispatch(Actions.startExamAction(question));
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
