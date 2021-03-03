import { Link, Route, Switch } from 'react-router-dom';

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const Category = () => (
	<div>
		<h2>Category</h2>
	</div>
);

const Products = () => (
	<div>
		<h2>Products</h2>
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
				</ul>
			</nav>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/category">
				<Category />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
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
 * old ver.
 * <Route exact path="/" component={Home} />
 * return 
  { history: { ... }
  location: { ... }
  match: { ... } }
	
 * new v5 <
 * <Route exact path="/"><Home /></Route>
 * return
 * {}
 * 
 * * Use a hook instead of the old version !!
 */
