import { Redirect, Route, useLocation } from 'react-router-dom';
import { fakeAuth } from './Login';

export default function PrivateRoute({ component: Component, ...rest }) {
	const location = useLocation();
	return (
		<Route {...rest}>
			{fakeAuth.isAuthenticated === true ? (
				// 인증이 성공하면 private을 보여주고
				<Component />
			) : (
				// 인증이 실패하면 /login으로 redirect
				<Redirect to={{ pathname: '/login', state: { from: location } }} />
			)}
		</Route>
	);
}

// ! Redirect Component
/**
 * <Redirect to={{pathname: '/login', state: { from: location }}}
 */

// ! Custom Routes
