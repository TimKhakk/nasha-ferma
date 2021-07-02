
function ProductCards({cart, plusProductToCart, minusProductToCart, products, addToCart}) {


	const renderProducts = () => {
		return products.map((product) => {
			return (
				<div className="product-card">
					<h4 className="product-card__title">{product[0].category}</h4>

					<div className="product-card__items">
						{product.map(({ id, name, price, weight, imgUrl}) => {
							return (
								<div className="product-card-item">
									<div className="product-card-item__img-block">
										<img src={imgUrl} alt={name} className="product-card-item__img"/>
									</div>

									<p className="product-card-item__title">{name}</p>
									<span className="product-card-item__weight">{weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}</span>

									{cart.find(item => item.id === id) ?
										<div className="product-card-item__btns-block">
											<button
												className="product-card-item__minus-btn"
												onClick={() => minusProductToCart(id)}
											>-</button>

											<span className="product-card-item__total-count">
												{cart.map(item => item.id === id && item.count)}
											</span>

											<button
												onClick={() => { plusProductToCart(id) } }
												className="product-card-item__plus-btn"
											>+</button></div> :
										<button
											key={id}
											className="product-card-item__btn-add-to-cart"
											onClick={() => addToCart(id)}
										>{price} ₽</button>
									}

								</div>
							);
						})}
					</div>
				</div>
			)

		})
	};


	return (
		<div className="product-cards">
			{renderProducts()}
		</div>
	);
}

export default ProductCards;