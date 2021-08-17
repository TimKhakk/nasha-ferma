import { motion } from 'framer-motion';
import { useStoreContext } from '../../../Context/StoreContext';
import ProductCard from './ProductCard';

const Groups = () => {
	const { categoriedProducts, groups } = useStoreContext();

	return groups.map(group => {
		const groupedProducts = categoriedProducts.filter(item => item.group === group);
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				key={group}
				className='product-card'
			>
				<h4 className='product-card__title'>{group}</h4>

				<div className='product-card__items'>
					{groupedProducts.map(product => (
						<ProductCard data={product} />
					))}
				</div>
			</motion.div>
		);
	});
};

export default Groups;
