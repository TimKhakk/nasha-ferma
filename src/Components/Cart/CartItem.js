import React from 'react';
import { useStoreContext } from '../../Context/StoreContext';

const CartItem = ({ item }) => {
	const { plusProduct, removeProduct, minusProduct } = useStoreContext();
	const { id, imgUrl, name, weight, price, count } = item;

	return (
		<div key={id} className='big-cart-item'>
			<div className='big-cart-item__photo-block'>
				<img src={imgUrl} alt={name} className='big-cart-item__photo' />
			</div>

			<div className='big-cart-item__info'>
				<span className='big-cart-item__info-item'>{name}</span>
				<span className='big-cart-item__info-item'>
					{weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}
				</span>
				<span className='big-cart-item__info-item'>{price} ₽</span>
			</div>

			<div className='big-cart-item__btns-block'>
				<button className='big-cart-item__minus-btn' onClick={() => minusProduct(id)}>
					<svg className='big-cart-item__btn-svg' width='8px' height='2px'>
						<use href='icons.svg#minus-big-cart'></use>
					</svg>
				</button>

				<span className='mini-cart-item__total-count'>{count}</span>

				<button onClick={() => plusProduct(id)} className='big-cart-item__plus-btn'>
					<svg className='big-cart-item__btn-svg' viewBox='0 0 10 10' width='8px' height='8px'>
						<use href='icons.svg#plus-big-cart'></use>
					</svg>
				</button>
			</div>

			<div className='big-cart-item__total-price-block'>{price * count} ₽</div>

			<div className='big-cart-item__delete-btn-block'>
				<button className='big-cart-item__delete-btn' onClick={() => removeProduct(id)}>
					<svg
						className='mini-cart-item__delete-btn-svg'
						viewBox='0 0 20 20'
						width='20'
						height='20'
					>
						<use href='icons.svg#delete' />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
