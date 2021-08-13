import { motion } from 'framer-motion';
import { useStoreContext } from '../../../Context/StoreContext';

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
				<svg className='mini-cart-item__btn-svg' width='12' height='1'>
					<use href='icons.svg#minus'></use>
				</svg>
			</button>

			<span className='mini-cart-item__total-count'>{count}</span>

			<button onClick={() => plusProductToCart(id)} className='mini-cart-item__plus-btn'>
				<svg className='mini-cart-item__btn-svg' viewBox='0 0 15 15' width='12' height='12'>
					<use href='icons.svg#plus'></use>
				</svg>
			</button>

			<button className='mini-cart-item__delete-btn' onClick={() => deleteProduct(id)}>
				<svg className='mini-cart-item__delete-btn-svg' width='19' height='19'>
					<use href='icons.svg#delete'></use>
				</svg>
			</button>

			<span className='mini-cart-item__price'>{price} ₽</span>
		</motion.div>
	);
};

export default MiniCartItem;
