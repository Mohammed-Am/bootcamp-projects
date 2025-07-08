import React, { createContext, useReducer } from "react";

const initialState = {
  count: 0,
};

const ActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ReducerContext = createContext();

function ReducerContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
}

export { ReducerContext, ReducerContextProvider, ActionTypes };