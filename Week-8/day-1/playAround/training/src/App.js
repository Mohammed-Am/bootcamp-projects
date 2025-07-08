import './App.css';
import MyComponent from './MyComponent';
import MyContext from './MyContext';
import UserContext from './UserContext';
import Counter from './Counter';
import { ReducerContextProvider } from './ReducerContextProvider';

function App() {
  const sharedState = {
    data: "This is shared data",
  };
  const userState = {
    name: "John Doe",
    email: "john@example.com",
  };
  return (
    <>
     <MyContext.Provider value={sharedState}>
       <MyComponent/>
    </MyContext.Provider>

      <UserContext.Provider value={userState}>
      </UserContext.Provider>

    <ReducerContextProvider>
      <Counter />
    </ReducerContextProvider>
    
    
    </>
     
  );
}

export default App;
