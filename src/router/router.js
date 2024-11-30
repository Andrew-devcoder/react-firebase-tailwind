import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
// import About from './About';
import Login from '../pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: 'home',
		element: <Home />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
