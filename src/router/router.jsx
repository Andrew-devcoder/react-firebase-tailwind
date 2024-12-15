import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from '../components/ProtectedRoute.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
				<Route index element={<Home />} />
				<Route
					path="home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
			</Route>
			<Route path="/login" element={<Login />} errorElement={<ErrorPage />} />
		</>
	)
);

export default router;

