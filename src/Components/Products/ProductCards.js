
function ProductCards({cart, plusProductToCart, minusProductToCart, addProductToCart, categoriedProducts, groups}) {

	const renderproducts = () => {
		return groups.map(group => {
			const groupedProducts = categoriedProducts.filter(item => item.group === group);
			return (
				<div className="product-card">
					<h4 className="product-card__title">{group}</h4>

					<div className="product-card__items">
						{groupedProducts.map(({ id, name, price, weight, imgUrl}) => {
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
											>
												<svg className="product-card-item__minus-btn-svg" width="15" height="2px">
													<rect fill="#0BA360" x="15" y="0.5" width="1" height="15" rx="0.5" transform="rotate(90 15 0.5)"/>
												</svg>
											</button>

											<span className="product-card-item__total-count">
												{cart.map(item => item.id === id && item.count)}
											</span>

											<button
												onClick={() => { plusProductToCart(id) } }
												className="product-card-item__plus-btn"
											>
												<svg className="product-card-item__plus-btn-svg" viewBox="0 0 15 15" width="15px" height="15px">
													<rect x="7" y="0.5" width="1" height="15" rx="0.5" fill="#0BA360"/>
													<rect x="15" y="7.5" width="1" height="15" rx="0.5" fill="#0BA360" transform="rotate(90 15 7.5)"/>
												</svg>
											</button></div> :
										<button
											key={id}
											className="product-card-item__btn-add-to-cart"
											onClick={() => addProductToCart(id)}
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
			{renderproducts()}
		</div>
	);
}

export default ProductCards;
