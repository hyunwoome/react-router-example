import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

const Item = () => {
	const { name } = useParams();
	return (
		<>
			<h3>{name}</h3>
		</>
	);
};

export default function Category() {
	const { url, path } = useRouteMatch();
	return (
		<>
			<ul>
				<li>
					<Link to={`${url}/shoes`}>Shoes</Link>
				</li>
				<li>
					<Link to={`${url}/boots`}>Boots</Link>
				</li>
				<li>
					<Link to={`${url}/footwear`}>Footwear</Link>
				</li>
			</ul>
			<Route path={`${path}/:name`}>
				<Item />
			</Route>
		</>
	);
}

// ! Dynamic Nested Routing
/**
 * * example = "/category/shoes"
 * 
/**
 * 1. useRouteMatch hook
 *  * Access to the `match` object.
 *  * `match.url` will be used for building nested links.
 *  * `match.path` for nested routes.
 * 
 * 2. useParams hook
 * * we’re using the useParams hook, 
 * * which returns an object of key/value pairs of URL parameters.
 */
