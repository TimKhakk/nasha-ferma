import { Link } from 'react-router-dom';

function Categories({cart, plusProductToCart, deleteProduct, minusProductToCart, countTotalPrice}) {
	return (
		<div className="mini-cart">

			<Link to="/cart" className="mini-cart__title">Корзина</Link>

			{cart.map(({ id, name, price, count }) => {
				return (
					<div key={id} className="mini-cart-item">
						<p className="mini-cart-item__title">{name}</p>
						<span className="mini-cart-item__total-price">{price * count} ₽</span>

						<button
							className="mini-cart-item__minus-btn"
							onClick={() => minusProductToCart(id)}
						>
							<svg className="mini-cart-item__btn-svg" width="10" height="1px">
								<rect x="15" y="0.5" width="1" height="15" rx="0.5" transform="rotate(90 15 0.5)"/>
							</svg>
						</button>

						<span className="mini-cart-item__total-count">{count}</span>

						<button
							onClick={() => { plusProductToCart(id) } }
							className="mini-cart-item__plus-btn"
						>
							<svg className="mini-cart-item__btn-svg" viewBox="0 0 15 15" width="10px" height="10px">
								<rect x="7" y="0.5" width="1" height="15" rx="0.5" fill="#898989"/>
								<rect x="15" y="7.5" width="1" height="15" rx="0.5" transform="rotate(90 15 7.5)"/>
							</svg>
						</button>

						<button
							className="mini-cart-item__delete-btn"
							onClick={() => deleteProduct(id)}
						>
							<svg className="mini-cart-item__delete-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M9.695 17.417c-1.072 0-2.118-.012-3.153-.034-1.324-.026-2.24-.884-2.39-2.24-.249-2.248-.675-7.547-.68-7.6a.593.593 0 01.545-.64c.322-.008.613.218.64.544.003.054.43 5.335.676 7.566.085.77.5 1.168 1.234 1.183 1.979.042 3.998.044 6.175.005.78-.015 1.2-.405 1.288-1.193.245-2.212.673-7.507.677-7.56.026-.327.315-.555.64-.545.326.027.57.313.544.64-.005.054-.434 5.367-.681 7.595-.154 1.383-1.067 2.225-2.446 2.25-1.056.018-2.074.029-3.069.029zm6.699-11.884H2.969a.594.594 0 010-1.187h13.425a.594.594 0 010 1.187z" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M13.807 5.533a1.904 1.904 0 01-1.86-1.525l-.193-.963c-.04-.146-.207-.274-.397-.274H8.006a.419.419 0 00-.406.31l-.184.927a1.903 1.903 0 01-1.86 1.525.594.594 0 010-1.187c.337 0 .63-.241.696-.572l.192-.963c.196-.737.835-1.227 1.562-1.227h3.35c.728 0 1.366.49 1.554 1.192l.201.998a.713.713 0 00.696.572.594.594 0 010 1.187z" />
							</svg>
						</button>
					</div>
				)
			})}

			{cart.length === 0 ?
				<div className="mini-cart_empty">Корзина пуста</div> :
				<>
					<div className="mini-cart-bottom">
						<div className="mini-cart-bottom__item">
							<span className="mini-cart-bottom__item-title">Доставка:</span>
							<span className="mini-cart-bottom__item-value">0 ₽</span>
						</div>

						<div className="mini-cart-bottom__item">
							<span className="mini-cart-bottom__item-title">Время доставки:</span>
							<span className="mini-cart-bottom__item-value">0 мин.</span>
						</div>

						<div className="mini-cart-bottom__item">
							<span className="mini-cart-bottom__price-title">Итого:</span>
							<span className="mini-cart-bottom__price">{countTotalPrice()} ₽</span>
						</div>
					</div>

					<button className="mini-cart__buy">К оплате</button>
				</>
			}

		</div>
	);
}

export default Categories;