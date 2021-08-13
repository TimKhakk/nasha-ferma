import { useStoreContext } from '../../Context/StoreContext';
import CartItem from './CartItem';
import Order from './Order';

const CartNotEmpty = () => {
	const { cart } = useStoreContext();

	return (
		<div className='cart-row'>
			<div className='big-cart-items'>
				{cart.map(item => (
					<CartItem item={item} />
				))}
			</div>
			<Order />
		</div>
	);
};

export default CartNotEmpty;
