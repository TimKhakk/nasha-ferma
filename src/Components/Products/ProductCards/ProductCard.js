import Svg from '../../Default/Svg';
import { motion } from 'framer-motion';
import { useStoreContext } from '../../../Context/StoreContext';

const ProductCard = ({ data }) => {
	const { cart, plusProductToCart, minusProductToCart, addProductToCart } = useStoreContext();
	const { id, name, price, weight, imgUrl } = data;

	return (
		<div key={id} className='product-card-item'>
			<div className='product-card-item__img-block'>
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					src={imgUrl}
					alt={name}
					className='product-card-item__img'
				/>
			</div>

			<p className='product-card-item__title'>{name}</p>

			<span className='product-card-item__weight'>
				{weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}
			</span>

			{cart.find(item => item.id === id) ? (
				<div className='product-card-item__btns-block'>
					<button
						className='product-card-item__minus-btn'
						onClick={() => minusProductToCart(id)}
					>
						<Svg id='minus' w='15' h='2' color='#0BA360' />
					</button>

					<span className='product-card-item__total-count'>
						{cart.map(item => item.id === id && item.count)}
					</span>

					<button
						onClick={() => {
							plusProductToCart(id);
						}}
						className='product-card-item__plus-btn'
					>
						<Svg id='plus' w='15' h='15' color='#0BA360' />
					</button>
				</div>
			) : (
				<button
					key={id}
					className='product-card-item__btn-add-to-cart'
					onClick={() => addProductToCart(id)}
				>
					{price} ₽
				</button>
			)}
		</div>
	);
};

export default ProductCard;
