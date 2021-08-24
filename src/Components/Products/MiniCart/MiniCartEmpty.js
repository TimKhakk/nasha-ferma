import { motion } from 'framer-motion';
import Svg from '../../Default/Svg';

const MiniCartEmpty = () => {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='mini-cart_empty'
		>
			<Svg id='cart' w='66' h='65' color='#9F9F9F' />
			<span className='mini-cart__title_empty'>
				Выберите товары
				<br />и добавьте их к заказу
			</span>
		</motion.div>
	);
};

export default MiniCartEmpty;
