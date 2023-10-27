import { Helmet } from 'react-helmet-async';

import { ProductDetailView } from 'src/sections/product-detail/view';

// ----------------------------------------------------------------------

export default function ProductsPage({ title, description }) {
	return (
		<>
			<Helmet>
				<title> Product Detail | Minimal UI </title>
			</Helmet>

			<ProductsView />
		</>
	);
}
