import { motion } from 'framer-motion';
import { useStoreContext } from '../../../Context/StoreContext';
import Svg from '../../Default/Svg';

const MiniCartItem = ({ item }) => {
	const { id, name, weight, price, count } = item;
	const { plusProductToCart, deleteProduct, minusProductToCart } = useStoreContext();
	return (
		<motion.div
			layout
			key={id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
			className='mini-cart-item'
		>
			<p className='mini-cart-item__title'>
				{name}, {weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}
			</p>

			<span className='mini-cart-item__total-price'>{price * count} ₽</span>

			<button className='mini-cart-item__minus-btn' onClick={() => minusProductToCart(id)}>
				<Svg id='minus' w='12' h='2' />
			</button>

			<span className='mini-cart-item__total-count'>{count}</span>

			<button onClick={() => plusProductToCart(id)} className='mini-cart-item__plus-btn'>
				<Svg id='plus' w='12' h='12' />
			</button>

			<button className='mini-cart-item__delete-btn' onClick={() => deleteProduct(id)}>
				<Svg id='delete' w='19' h='19' />
			</button>

			<span className='mini-cart-item__price'>{price} ₽</span>
		</motion.div>
	);
};

export default MiniCartItem;
