import { Link } from 'react-router-dom';

function Categories({cart, plusProductToCart, deleteProduct, minusProductToCart, countTotalPrice}) {
	return (
		<div className="mini-cart">

			<Link to="/cart" className="mini-cart__title">Корзина</Link>

			{cart.map(({ id, name, price, count }) => {
				return (
					<div key={id} className="mini-cart-item">
						<p className="mini-cart-item__title">{name}</p>
						<span className="mini-cart-item__total-price">{price * count} руб.</span>

						<button
							className="mini-cart-item__minus-btn"
							onClick={() => minusProductToCart(id)}
						>-</button>

						<span className="mini-cart-item__total-count">{count}</span>

						<button
							onClick={() => { plusProductToCart(id) } }
							className="mini-cart-item__plus-btn"
						>+</button>

						<button
							className="mini-cart-item__delete-btn"
							onClick={() => deleteProduct(id)}
						>×</button>
					</div>
				)
			})}

			{cart.length === 0 ?
				<div className="mini-cart_empty">Корзина пуста</div> :
				<>
					<div className="mini-cart-bottom">
						<div className="mini-cart-bottom__item">
							<span className="mini-cart-bottom__item-title">Доставка:</span>
							<span className="mini-cart-bottom__item-value">0 руб.</span>
						</div>

						<div className="mini-cart-bottom__item">
							<span className="mini-cart-bottom__item-title">Время доставки:</span>
							<span className="mini-cart-bottom__item-value">0 мин.</span>
						</div>

						<div className="mini-cart-bottom__item">
							<span className="mini-cart-bottom__price-title">Итого:</span>
							<span className="mini-cart-bottom__price">{countTotalPrice()} руб.</span>
						</div>
					</div>

					<button className="mini-cart__buy">К оплате</button>
				</>
			}

		</div>
	);
}

export default Categories;