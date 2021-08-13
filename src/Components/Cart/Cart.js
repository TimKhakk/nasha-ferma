import Breadcrumbs from '../Default/Breadcrumbs';
import CartItem from './CartItem';
import Order from './Order';

import { useStoreContext } from '../../Context/StoreContext';
import CartEmpty from './CartEmpty';

function Cart() {
	const { cart, countTotalPrice } = useStoreContext();
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
			<div className='container'>
				{cart.length === 0 ? (
					<CartEmpty />
				) : (
					<div className='cart-row'>
						<div className='big-cart-items'>
							{cart.map(item => {
								return <CartItem item={item} />;
							})}
						</div>
						<Order countTotalPrice={countTotalPrice} />
					</div>
				)}
			</div>
		</>
	);
}

export default Cart;
