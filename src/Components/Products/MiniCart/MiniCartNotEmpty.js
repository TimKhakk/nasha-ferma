import { motion } from 'framer-motion';
import { useStoreContext } from '../../../Context/StoreContext';

const MiniCartNotEmpty = () => {
	const { countTotalPrice } = useStoreContext();
	return (
		<>
			<motion.div
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className='mini-cart-bottom'
			>
				<div className='mini-cart-bottom__item'>
					<span className='mini-cart-bottom__item-title'>Доставка:</span>
					<span className='mini-cart-bottom__item-value'>0 ₽</span>
				</div>

				<div className='mini-cart-bottom__item'>
					<span className='mini-cart-bottom__item-title'>Время доставки:</span>
					<span className='mini-cart-bottom__item-value'>5-10 мин.</span>
				</div>

				<div className='mini-cart-bottom__item'>
					<span className='mini-cart-bottom__price-title'>Итого:</span>
					<span className='mini-cart-bottom__price'>{countTotalPrice()} ₽</span>
				</div>
			</motion.div>

			<motion.button
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className='mini-cart__buy'
			>
				К оплате
			</motion.button>
		</>
	);
};

export default MiniCartNotEmpty;
