import { Link } from 'react-router-dom';

function Categories({cart, plusProductToCart, deleteProduct, minusProductToCart, countTotalPrice}) {
	return (
		<>
			<div className="mini-cart">

				<Link to="/cart" className="mini-cart__title">Корзина</Link>

				{cart.map(({ id, name, price, count, weight }) => {
					return (
						<div key={id} className="mini-cart-item">
							<p className="mini-cart-item__title">{name}, {weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}</p>

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

							<span className="mini-cart-item__price">{price} ₽</span>
						</div>
					)
				})}

				{cart.length === 0 ?
					<div className="mini-cart_empty">
						<svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5648 18.1291L15.5245 41.4381C15.6675 43.2321 17.1333 44.5776 18.924 44.5776H18.937H54.3978H54.4043C56.0975 44.5776 57.5438 43.3166 57.7843 41.6428L60.8718 20.3261C60.9433 19.8191 60.8165 19.3121 60.5078 18.9026C60.2023 18.4898 59.7538 18.2233 59.2468 18.1518C58.5675 18.1778 30.3803 18.1388 13.5648 18.1291V18.1291ZM18.9174 49.4525C14.6372 49.4525 11.0134 46.1115 10.6657 41.8377L7.68868 6.43222L2.79093 5.58722C1.46168 5.35322 0.574429 4.09547 0.801929 2.76622C1.03593 1.43697 2.31968 0.572467 3.61968 0.780467L10.3797 1.95047C11.4684 2.14222 12.2972 3.04572 12.3914 4.15072L13.1552 13.254C59.5522 13.2735 59.7017 13.2962 59.9259 13.3222C61.7362 13.5855 63.3287 14.5312 64.4142 15.9872C65.4997 17.44 65.9547 19.2307 65.6947 21.0247L62.6104 42.3382C62.0287 46.3942 58.5057 49.4525 54.4107 49.4525H54.3944H18.9434H18.9174Z" fill="#9F9F9F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M49.1845 30.142H40.1755C38.8268 30.142 37.738 29.05 37.738 27.7045C37.738 26.359 38.8268 25.267 40.1755 25.267H49.1845C50.53 25.267 51.622 26.359 51.622 27.7045C51.622 29.05 50.53 30.142 49.1845 30.142" fill="#9F9F9F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5195 58.2812C18.4978 58.2812 19.2875 59.0709 19.2875 60.0492C19.2875 61.0274 18.4978 61.8204 17.5195 61.8204C16.538 61.8204 15.7483 61.0274 15.7483 60.0492C15.7483 59.0709 16.538 58.2812 17.5195 58.2812" fill="#9F9F9F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5163 64.2576C15.1958 64.2576 13.3108 62.3693 13.3108 60.0488C13.3108 57.7283 15.1958 55.8433 17.5163 55.8433C19.8368 55.8433 21.725 57.7283 21.725 60.0488C21.725 62.3693 19.8368 64.2576 17.5163 64.2576" fill="#9F9F9F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M52.4555 64.4143C50.135 64.4143 48.25 62.5261 48.25 60.2056C48.25 57.8851 50.135 56.0001 52.4555 56.0001C54.7792 56.0001 56.6675 57.8851 56.6675 60.2056C56.6675 62.5261 54.7792 64.4143 52.4555 64.4143" fill="#9F9F9F"/>
						</svg>
						<span className="mini-cart__title_empty">Выберите товары<br/>и добавьте их к заказу</span>
					</div> :
					<>
						<div className="mini-cart-bottom">
							<div className="mini-cart-bottom__item">
								<span className="mini-cart-bottom__item-title">Доставка:</span>
								<span className="mini-cart-bottom__item-value">0 ₽</span>
							</div>

							<div className="mini-cart-bottom__item">
								<span className="mini-cart-bottom__item-title">Время доставки:</span>
								<span className="mini-cart-bottom__item-value">5-10 мин.</span>
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


			<div className={cart.length === 0 ? "container-sm-cart" : "container-sm-cart active"}>
				<Link to="/cart" className="sm-cart">
					<span className="sm-cart__delivery-time">5-10 мин.</span>
					<div className="sm-cart__title">Корзина</div>
					<span className="sm-cart__price">{countTotalPrice()} ₽</span>
				</Link>
		</div>
	</>
	);
}

export default Categories;
