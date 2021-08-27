import { Link } from 'react-router-dom';
import { useStoreContext } from '../../../Context/StoreContext';

import MiniCartEmpty from './MiniCartEmpty';
import MiniCartNotEmpty from './MiniCartNotEmpty';
import CartForSmallerScreens from '../../Default/CartForSmallerScreens';
import MiniCartItem from './MiniCartItem';

function MiniCart() {
	const { cart } = useStoreContext();
	return (
		<>
			<div className='mini-cart'>
				<Link to='/cart' className='title'>
					Корзина
				</Link>

				{cart.map(item => (
					<MiniCartItem key={item.id} item={item} />
				))}

				{cart.length === 0 ? <MiniCartEmpty /> : <MiniCartNotEmpty />}
			</div>

			<CartForSmallerScreens />
		</>
	);
}

export default MiniCart;
