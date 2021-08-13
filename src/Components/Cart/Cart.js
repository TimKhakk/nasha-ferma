import { useStoreContext } from '../../Context/StoreContext';

import Breadcrumbs from '../Default/Breadcrumbs';
import CartEmpty from './CartEmpty';
import Container from '../Default/Container';
import CartNotEmpty from './CartNotEmpty';
import CartForSmallerScreens from '../Default/CartForSmallerScreens';

function Cart() {
	const { cart } = useStoreContext();
	return (
		<>
			<Breadcrumbs
				paths={[
					{
						name: 'Продукты',
						path: 'products',
					},
				]}
				name={'Корзина'}
			/>
			<div className='cart'>
				<Container>{cart.length === 0 ? <CartEmpty /> : <CartNotEmpty />}</Container>
			</div>

			<CartForSmallerScreens />
		</>
	);
}

export default Cart;
