import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Layout = () => (
	<div>
		<header>
			<h1>My App Header</h1>
		</header>
		<main>
			<Outlet />
		</main>
		<footer>
			<p>My App Footer</p>
		</footer>
	</div>
);

const TestPage = () => (
	<div>
		<h2>Welcome to Test Page</h2>
		<p>Select a child route to see more.</p>
	</div>
);

const ErrorPage = () => (
	<div>
		<h2>404 - Page Not Found</h2>
		<p>Ця сторінка не знайдена.</p>
	</div>
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/test',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <TestPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'home',
				element: <Home />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
