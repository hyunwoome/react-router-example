import { useParams } from 'react-router-dom';

export default function Product({ data }) {
	const { productId } = useParams();
	const product = data.find((p) => p.id === Number(productId));
	let productData;

	if (product) {
		productData = (
			<div>
				<h3> {product.name} </h3>
				<p>{product.description}</p>
				<hr />
				<h4>{product.status}</h4>
			</div>
		);
	} else {
		productData = <h2> Sorry. Product doesn't exist </h2>;
	}

	return (
		<div>
			<div>{productData}</div>
		</div>
	);
}
