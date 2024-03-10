import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';



/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  },
  {
    path : '/quiz',
    element : <Quiz />
  },
  {
    path : '/result',
    element : <Result />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;