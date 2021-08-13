import Breadcrumbs from '../Default/Breadcrumbs';
import CartItem from './CartItem';
import Order from './Order';

import { useStoreContext } from '../../Context/StoreContext';

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
				<div className='cart-row'>
					<div className='big-cart-items'>
						{cart.map(item => {
							return <CartItem item={item} />;
						})}
					</div>

					{cart.length === 0 ? (
						<div className='mini-cart_empty'>Корзина пуста</div>
					) : (
						<Order countTotalPrice={countTotalPrice} />
					)}
				</div>
			</div>
		</>
	);
}

export default Cart;
