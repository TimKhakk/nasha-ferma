import React from 'react';

const Order = ({ countTotalPrice }) => {
	return (
		<div className='big-cart-side'>
			<div className='big-cart-side-title'>Ваш заказ</div>

			<div className='big-cart-bottom'>
				<div className='big-cart-bottom__item'>
					<span className='big-cart-bottom__item-title'>Доставка:</span>
					<span className='big-cart-bottom__item-value'>0 ₽</span>
				</div>

				<div className='big-cart-bottom__item'>
					<span className='big-cart-bottom__item-title'>Время доставки:</span>
					<span className='big-cart-bottom__item-value'>0 мин.</span>
				</div>

				<div className='big-cart-bottom__item'>
					<span className='big-cart-bottom__price-title'>Итого:</span>
					<span className='big-cart-bottom__price'>{countTotalPrice()} ₽</span>
				</div>
			</div>

			<button className='big-cart__buy'>Перейти к оплате</button>
		</div>
	);
};

export default Order;
