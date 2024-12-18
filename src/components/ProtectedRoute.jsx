import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
	const isAuth = useSelector((state) => !!state.user.uid);

	return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
