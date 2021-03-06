import { Link, Route, Switch } from 'react-router-dom';
import Category from './Category';
import Products from './Products';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const Admin = () => (
	<div>
		<h2>Welcome Admin!</h2>
	</div>
);

export default function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/category">Category</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/admin">Admin area</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/category">
					<Category />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				{/* 커스텀 라우트에서 렌더링하는 component는 보호받아야할 컴포넌트 전달 (여기선 Admin) */}
				<PrivateRoute path="/admin" component={Admin} />
				<Route path="/:id">
					<p>This text will render for any route other than '/'</p>
				</Route>
			</Switch>
		</>
	);
}

// ! Path and Match
/**
 * match.url: 		for nested <Link> components.
 * match.path: 		for nested <Route> components.
 * match.isExact: return to Boolean.
 * match.params:  URL parsed to key/value containing object.
 */

// ! Implicit Passing of Props
/**
 * ? old ver.
 * <Route exact path="/" component={Home} />
 * return 
  { history: { ... }
  location: { ... }
  match: { ... } }
	
 * ? new v5
 * <Route exact path="/"><Home /></Route>
 * return
 * {}
 * 
 * * Use a hook instead of the old version !!
 */

// ! Switch Components
/**
 * <Switch> components is only the first child <Route> that matches the location gets rendered.
 */

// ! Implementing the Protected Route
