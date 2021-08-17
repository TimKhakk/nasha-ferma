import { motion } from 'framer-motion';
import Svg from '../Default/Svg';

const CartEmpty = () => (
	<motion.div
		layout
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className='big-cart_empty'
	>
		<Svg id='cart' w='200' h='200' color='#9F9F9F' />
		<span className='big-cart_empty__title mini-cart__title_empty'>Ваша корзина пуста</span>
	</motion.div>
);

export default CartEmpty;
