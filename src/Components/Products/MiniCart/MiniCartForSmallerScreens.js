import { useStoreContext } from '../../../Context/StoreContext';
import { Link } from 'react-router-dom';

const MiniCartForSmallerScreens = () => {
	const { cart, countTotalPrice } = useStoreContext();

	return (
		<div className={cart.length === 0 ? 'container-sm-cart' : 'container-sm-cart active'}>
			<Link to='/cart' className='sm-cart'>
				<span className='sm-cart__delivery-time'>5-10 мин.</span>
				<div className='sm-cart__title'>Корзина</div>
				<span className='sm-cart__price'>{countTotalPrice()} ₽</span>
			</Link>
		</div>
	);
};

export default MiniCartForSmallerScreens;
