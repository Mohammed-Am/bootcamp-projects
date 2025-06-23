import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import PostList from './Exercice2/PostList';
import data from './Exercice2/data.json'; 
import Example1 from './Exercice3/Example1';
import Example2 from './Exercice3/Example2';
import Example3 from './Exercice3/Example3';


   const postData = async () => {
    const webhookUrl = 'https://webhook.site/03e94550-eb5b-4d44-99c7-187ef21d4b9c'; 
    const jsonData = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
      });
      const result = await response.json();
      console.log('Response:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

 const HomeScreen = () => (
      
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Home</h1>
          <div className="w-full max-w-2xl">
            {data.map((post, index) => (
              <PostList key={post.id || index} post={post} index={index} />
            ))}
          </div>

             <ErrorBoundary>
                <Example1 />
            </ErrorBoundary>


             <ErrorBoundary>
                <Example2 />
            </ErrorBoundary>


            <ErrorBoundary>
                <Example3 />
            </ErrorBoundary>


            
          <div>
            <h1>Webhook Poster</h1>
            <button className='bg-sky-600  text-withe-500' onClick={postData}>Send JSON Data</button>
          </div>

            

        </div>
);
  const ProfileScreen = () => (
    <ErrorBoundary>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-green-600">Profile</h1>
      </div>
      
    </ErrorBoundary>
  );

 const ShopScreen = () => { throw new Error("")};
  


function App() {
 

  return (
    <>
    <BrowserRouter>
      <nav className="flex justify-center gap-5 p-4  text-blue-700 text-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'font-bold p-2 text-white rounded-lg bg-blue-500'
              : 'p-2 hover:underline'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? 'font-bold p-2 text-white rounded-lg bg-blue-500'
              : 'p-2 hover:underline'
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? 'font-bold p-2 text-white rounded-lg bg-blue-500'
              : 'p-2 hover:underline'
          }
        >
          Shop
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={ <ErrorBoundary> <HomeScreen /> </ErrorBoundary>}  />
        <Route path="/profile" element={ <ErrorBoundary> <ProfileScreen /> </ErrorBoundary>} />
        <Route path="/shop" element={ <ErrorBoundary>   <ShopScreen /> </ErrorBoundary> } />     
      </Routes>


    </BrowserRouter>

    

    </>
  );
}

export default App;