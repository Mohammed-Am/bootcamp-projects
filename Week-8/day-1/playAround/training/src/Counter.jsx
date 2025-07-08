import React, { useContext } from "react";
import { ReducerContext, ActionTypes } from "./ReducerContextProvider";

function Counter() {
  const { state, dispatch } = useContext(ReducerContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: ActionTypes.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: ActionTypes.DECREMENT })}>
        -
      </button>
    </div>
  );
}
export default Counter