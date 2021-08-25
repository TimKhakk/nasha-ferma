const Category = ({ item, change }) => (
	<li className='category' onClick={() => change(item[0].category)}>
		<span className='category__title'>{item[0].category}</span>
		<div className='count'>{item.length}</div>
	</li>
);

export default Category;
