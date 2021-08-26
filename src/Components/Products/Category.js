const Category = ({ item, change, category }) => {
	return (
		<li
			className={`category${item[0].category === category ? ' active' : ''}`}
			onClick={() => {
				item[0].category !== category && change(item[0].category);
			}}
		>
			<span className='category__title'>{item[0].category}</span>
			<div className='count'>{item.length}</div>
		</li>
	);
};

export default Category;
