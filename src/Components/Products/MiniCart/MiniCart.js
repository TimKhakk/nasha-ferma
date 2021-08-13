import { Link } from 'react-router-dom';
import { useStoreContext } from '../../../Context/StoreContext';

import MiniCartEmpty from './MiniCartEmpty';
import MiniCartNotEmpty from './MiniCartNotEmpty';
import MiniCartForSmallerScreens from './MiniCartForSmallerScreens';
import MiniCartItem from './MiniCartItem';

function MiniCart() {
	const { cart } = useStoreContext();
	return (
		<>
			<div className='mini-cart'>
				<Link to='/cart' className='mini-cart__title'>
					Корзина
				</Link>

				{cart.map(item => (
					<MiniCartItem item={item} />
				))}

				{cart.length === 0 ? <MiniCartEmpty /> : <MiniCartNotEmpty />}
			</div>

			<MiniCartForSmallerScreens />
		</>
	);
}

export default MiniCart;
