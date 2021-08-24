import { motion } from 'framer-motion';
import { useStoreContext } from '../../../Context/StoreContext';
import ProductCard from './ProductCard';

const Groups = () => {
	const { categoriedProducts, groups } = useStoreContext();

	return (
		<div className='groups'>
			{groups.map(group => {
				const groupedProducts = categoriedProducts.filter(item => item.group === group);
				return (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						key={group}
						className='group'
					>
						<h4 className='group__title'>{group}</h4>

						<div className='items'>
							{groupedProducts.map(product => (
								<ProductCard data={product} />
							))}
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default Groups;
