import React from 'react';

const CartItem = ({
	item,
	plusProductToCart,
	deleteProduct,
	minusProductToCart,
}) => {
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
				<button
					className='big-cart-item__minus-btn'
					onClick={() => minusProductToCart(id)}
				>
					<svg className='big-cart-item__btn-svg' width='8px' height='2px'>
						<use href='icons.svg#minus-big-cart'></use>
					</svg>
				</button>

				<span className='mini-cart-item__total-count'>{count}</span>

				<button
					onClick={() => {
						plusProductToCart(id);
					}}
					className='big-cart-item__plus-btn'
				>
					<svg
						className='big-cart-item__btn-svg'
						viewBox='0 0 10 10'
						width='8px'
						height='8px'
					>
						<use href='icons.svg#plus-big-cart'></use>
					</svg>
				</button>
			</div>

			<div className='big-cart-item__total-price-block'>{price * count} ₽</div>

			<div className='big-cart-item__delete-btn-block'>
				<button
					className='big-cart-item__delete-btn'
					onClick={() => deleteProduct(id)}
				>
					<svg
						className='mini-cart-item__delete-btn-svg'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 19 19'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M9.695 17.417c-1.072 0-2.118-.012-3.153-.034-1.324-.026-2.24-.884-2.39-2.24-.249-2.248-.675-7.547-.68-7.6a.593.593 0 01.545-.64c.322-.008.613.218.64.544.003.054.43 5.335.676 7.566.085.77.5 1.168 1.234 1.183 1.979.042 3.998.044 6.175.005.78-.015 1.2-.405 1.288-1.193.245-2.212.673-7.507.677-7.56.026-.327.315-.555.64-.545.326.027.57.313.544.64-.005.054-.434 5.367-.681 7.595-.154 1.383-1.067 2.225-2.446 2.25-1.056.018-2.074.029-3.069.029zm6.699-11.884H2.969a.594.594 0 010-1.187h13.425a.594.594 0 010 1.187z'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M13.807 5.533a1.904 1.904 0 01-1.86-1.525l-.193-.963c-.04-.146-.207-.274-.397-.274H8.006a.419.419 0 00-.406.31l-.184.927a1.903 1.903 0 01-1.86 1.525.594.594 0 010-1.187c.337 0 .63-.241.696-.572l.192-.963c.196-.737.835-1.227 1.562-1.227h3.35c.728 0 1.366.49 1.554 1.192l.201.998a.713.713 0 00.696.572.594.594 0 010 1.187z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
