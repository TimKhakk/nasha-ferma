import { useStoreContext } from '../../../Context/StoreContext';

const MiniCartNotEmpty = () => {
	const { countTotalPrice } = useStoreContext();
	return (
		<>
			<div className='bottom'>
				<div className='bottom__item'>
					<span className='item__title'>Доставка:</span>
					<span className='value'>0 ₽</span>
				</div>

				<div className='bottom__item'>
					<span className='item__title'>Время доставки:</span>
					<span className='value'>5-10 мин.</span>
				</div>

				<div className='bottom__item'>
					<span className='price-title'>Итого:</span>
					<span className='price'>{countTotalPrice()} ₽</span>
				</div>
			</div>

			<button className='mini-cart__buy'>К оплате</button>
		</>
	);
};

export default MiniCartNotEmpty;
