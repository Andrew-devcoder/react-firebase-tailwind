import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './Home';
// import About from './About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  // {
  //   path: 'about',
  //   element: <About />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
