import Breadcrumbs  from '../Default/Breadcrumbs';
import Container    from '../Default/Container';
import Categories   from "./Categories";
import ProductCards from "./ProductCards";
import MiniCart     from "./MiniCart";
// import { motion } from 'framer-motion';

function products({
		products,
		cart,
		plusProductToCart,
		deleteProduct,
		minusProductToCart,
		addProductToCart,
		countTotalPrice,
		categoriedProducts,
		groups,
		changeCategory
	}) {

	return (
		<div className="products">

			<Breadcrumbs name={"Продукты"} />

			<Container>

				<div
					className="products__row"
				>

					<Categories
						products={products}
						changeCategory={changeCategory}
					/>

					<ProductCards
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						addProductToCart={addProductToCart}
						categoriedProducts={categoriedProducts}
						groups={groups}
					/>

					<MiniCart
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						countTotalPrice={countTotalPrice}
					/>

				</div>
			</Container>
		</div>
	);
}

export default products;
