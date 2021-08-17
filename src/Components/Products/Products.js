import Breadcrumbs from '../Default/Breadcrumbs';
import Container from '../Default/Container';
import Categories from './Categories';
import ProductCards from './ProductCards/ProductCards';
import MiniCart from './MiniCart/MiniCart';

function Products() {
	return (
		<div className='products'>
			<Breadcrumbs name={'Продукты'} />

			<Container>
				<div className='products__row'>
					<Categories />

					<ProductCards />

					<MiniCart />
				</div>
			</Container>
		</div>
	);
}

export default Products;
