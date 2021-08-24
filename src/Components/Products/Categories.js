import { useStoreContext } from '../../Context/StoreContext';
import Category from './Category';

function Categories() {
	const { products, changeCategory } = useStoreContext();

	return (
		<div className='categories'>
			<span className='title'>Категории</span>

			<ul className='items'>
				{products.map(item => (
					<Category item={item} changeCategory={changeCategory} />
				))}
			</ul>
		</div>
	);
}

export default Categories;
