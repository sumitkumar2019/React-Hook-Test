import React, { useState, useReducer } from "react";
import { createContext } from "react";
const AgeContext = createContext();
const ageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_FIVE":
      return state + 5;
    case "ADD_NUM":
      return state + action.num;
    default:
      return state;
  }
};

//dispatch({type:'ADD_ONE'})
//dispatch({type:'ADD_NUM', num:7})
//dispatch({type:'ADD_FIVE'})
const AgeContextProvider = ({ children }) => {
  //const [age, setAge] = useState(20);
  const [age, dispatcher] = useReducer(ageReducer, 20);
  //   const addOneToAge = () => {
  //     setAge(age + 1);
  //   };
  //   const addFiveToAge = () => {
  //     setAge(age + 5);
  //   };
  //   const addNumToAge = num => {
  //     setAge(age + num);
  //   };
  return (
    <AgeContext.Provider
      value={(age, /**addOneToAge, addFiveToAge, addNumToAge*/ dispatch)}
    >
      {children}
    </AgeContext.Provider>
  );
};

export default AgeContextProvider;
