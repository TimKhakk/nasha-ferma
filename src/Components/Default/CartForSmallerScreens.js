import { useStoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom';

const CartForSmallerScreens = () => {
	const { cart, countTotalPrice } = useStoreContext();

	return (
		<div className={cart.length === 0 ? 'container-sm-cart' : 'container-sm-cart active'}>
			<Link to='/cart' className='sm-cart'>
				<span className='delivery-time'>5-10 мин.</span>
				<div className='title'>К оплате</div>
				<span className='price'>{countTotalPrice()} ₽</span>
			</Link>
		</div>
	);
};

export default CartForSmallerScreens;
