import { motion } from 'framer-motion';

const MiniCartEmpty = () => {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='mini-cart_empty'
		>
			<svg
				className='nav__side-item-cart'
				width='66'
				height='65'
				viewBox='0 0 66 65'
				style={{ fill: '#9F9F9F' }}
			>
				<use href='icons.svg#cart'></use>
			</svg>
			<span className='mini-cart__title_empty'>
				Выберите товары
				<br />и добавьте их к заказу
			</span>
		</motion.div>
	);
};

export default MiniCartEmpty;
