import { useStoreContext } from '../../Context/StoreContext';

function Categories() {
	const { products, changeCategory } = useStoreContext();

	return (
		<div className='categories'>
			<span className='categories__title'>Категории</span>

			<ul className='categories__list'>
				{products.map(item => {
					return (
						<li
							key={item[0].category}
							className='categories__item'
							onClick={() => changeCategory(item[0].category)}
						>
							<span className='categories__item-title'>{item[0].category}</span>
							<div className='categories__item-count'>{item.length}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Categories;
