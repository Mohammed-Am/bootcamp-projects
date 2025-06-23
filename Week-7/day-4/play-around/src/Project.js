import { useParams, useLocation } from "react-router-dom";


const Project = () => {

  let { name } = useParams();
  let params = useParams();
  let location = useLocation();


  console.log("name", name)
  return (
    <div>
      <hr></hr>
      <h3>The Project name is : <span style={{ color: "red" }}>{name}</span></h3>
      <h4>
        What's in params? <pre>{JSON.stringify(params, null, 4)}</pre>
      </h4>
      <h4>
        What's in location? <pre>{JSON.stringify(location, null, 4)}</pre>
      </h4>
    </div>
  );
};

export default Project