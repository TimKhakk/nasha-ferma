import Breadcrumbs from '../Default/Breadcrumbs';
import Container from '../Default/Container';
import Categories from './Categories';
import ProductCards from './ProductCards';
import MiniCart from './MiniCart';

import PropTypes from 'prop-types';

function Products({
	products,
	cart,
	plusProductToCart,
	deleteProduct,
	minusProductToCart,
	addProductToCart,
	countTotalPrice,
	categoriedProducts,
	groups,
	changeCategory,
}) {
	return (
		<div className='products'>
			<Breadcrumbs name={'Продукты'} />

			<Container>
				<div className='products__row'>
					<Categories products={products} changeCategory={changeCategory} />

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

Products.propTypes = {
	products: PropTypes.arrayOf(PropTypes.array).isRequired,
	cart: PropTypes.arrayOf(PropTypes.object).isRequired,
	groups: PropTypes.arrayOf(PropTypes.string).isRequired,
	categoriedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,

	plusProductToCart: PropTypes.func.isRequired,
	deleteProduct: PropTypes.func.isRequired,
	minusProductToCart: PropTypes.func.isRequired,
	addProductToCart: PropTypes.func.isRequired,
	countTotalPrice: PropTypes.func.isRequired,
	changeCategory: PropTypes.func.isRequired,
};

export default Products;
