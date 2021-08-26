import { useStoreContext } from '../../Context/StoreContext';
import Category from './Category';

function Categories() {
	const { products, changeCategory, category } = useStoreContext();

	return (
		<div className='categories'>
			<span className='title'>Категории</span>

			<ul className='items'>
				{products.map(item => (
					<Category
						key={item[0].category}
						item={item}
						change={changeCategory}
						category={category}
					/>
				))}
			</ul>
		</div>
	);
}

export default Categories;
