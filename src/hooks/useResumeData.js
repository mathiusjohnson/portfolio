import { useEffect, useReducer } from "react";
import axios from 'axios'
import reducer, { SET_RESUME_DATA } from '../reducers/resumeDataReducer'

export default function useResumeData() {
  const [state, dispatch] = useReducer(reducer, {
    resumeData: []
  });

  // RETRIEVES API AND SETS IT WITH REDUCER
  useEffect(() => {
      axios.get("/resumeData.json").then((res) => {
        const resumeData = res.data;
      dispatch({
        type: SET_RESUME_DATA,
        resumeData,
      });
    });
  }, []);

  return {
    state
  };
}