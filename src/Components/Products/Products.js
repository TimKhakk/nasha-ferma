import Breadcrumbs from '../Default/Breadcrumbs';
import Container from '../Default/Container';
import Categories from './Categories';
import MiniCart from './MiniCart/MiniCart';
import Groups from './ProductCards/Groups';
import Modal from '../Default/Modal';

function Products() {
	return (
		<div className='products'>
			<Breadcrumbs name={'Продукты'} />

			<Container>
				<div className='products__row'>
					<Categories />

					<Groups />

					<MiniCart />

					<Modal />
				</div>
			</Container>
		</div>
	);
}

export default Products;
