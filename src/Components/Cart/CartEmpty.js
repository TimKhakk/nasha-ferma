import { motion } from 'framer-motion';

const CartEmpty = () => {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='big-cart_empty'
		>
			<svg
				className='nav__side-item-cart'
				width='200'
				height='200'
				viewBox='0 0 200 200'
				style={{ fill: '#9F9F9F' }}
			>
				<use href='icons.svg#cart'></use>
			</svg>
			<span className='big-cart_empty__title mini-cart__title_empty'>
				Ваша корзина пуста
				<br />
			</span>
		</motion.div>
	);
};

export default CartEmpty;
