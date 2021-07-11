import Breadcrumbs  from '../Default/Breadcrumbs';
import Categories   from "./Categories";
import ProductCards from "./ProductCards";
import MiniCart     from "./MiniCart";

function Products({products, cart, plusProductToCart, deleteProduct, minusProductToCart, addToCart, countTotalPrice}) {

	return (
		<div className="products">

			<Breadcrumbs name={"Продукты"} />

			<div className="container">

				<div className="products__row">

					<Categories   products={products}/>

					<ProductCards
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						products={products}
						addToCart={addToCart}
					/>

					<MiniCart
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						countTotalPrice={countTotalPrice}
					/>

				</div>
			</div>
		</div>
	);
}

export default Products;
