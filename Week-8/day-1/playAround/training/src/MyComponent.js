import React, { useContext } from "react";
import MyContext from "./MyContext";

function MyComponent(props) {
      const sharedState = useContext(MyContext);

  return (
        <div>
            <p>{sharedState.data}</p>
        </div>
  )
}



export default MyComponent
