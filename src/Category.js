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
 * 1. useRouteMatch hooks
 *  * Access to the `match` object
 *  * `match.url` will be used for building nested links
 *  * `match.path` for nested routes
 */
