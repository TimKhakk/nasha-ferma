
function Categories({products}) {

	const renderCategories = () => {
		return products.map((item, index) => {
			return <li key={index} className="categories__item">
						<span className="categories__item-title">{item[0].category}</span>
						<div className="categories__item-count">{item.length}</div>
					</li>
			});
	};


	return (
		<div className="categories">
			<span className="categories__title">Категории</span>

			<ul className="categories__list">

				{renderCategories()}

			</ul>
		</div>
	);
}

export default Categories;