const Category = ({ item, changeCategory }) => (
	<li
		key={item[0].category}
		className='category'
		onClick={() => changeCategory(item[0].category)}
	>
		<span className='category__title'>{item[0].category}</span>
		<div className='count'>{item.length}</div>
	</li>
);

export default Category;
