import Svg from '../../Default/Svg';
import { motion } from 'framer-motion';
import { useStoreContext } from '../../../Context/StoreContext';

const ProductCard = ({ data }) => {
	const { cart, plusProduct, minusProduct, addProduct, toggleModal, setSelProduct } =
		useStoreContext();
	const { id, name, price, weight, imgUrl } = data;

	const showModal = () => {
		setSelProduct(data);
		toggleModal();
	};

	return (
		<div key={id} className='product'>
			<div className='top'>
				<div className='rating'>
					<Svg id='star' w='12' h='11' />5
				</div>
				<button className='info' onClick={showModal}>
					<Svg id='info' w='21' h='20' />
				</button>
			</div>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				src={imgUrl}
				alt={name}
				className='img'
				onClick={showModal}
			/>

			<p className='title'>{name}</p>

			<span className='weight'>
				{weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}
			</span>

			{cart.find(item => item.id === id) ? (
				<div className='buttons'>
					<button className='minus' onClick={() => minusProduct(id)}>
						<Svg id='minus' w='15' h='2' color='#0BA360' />
					</button>

					<span className='count'>{cart.map(item => item.id === id && item.count)}</span>

					<button
						onClick={() => {
							plusProduct(id);
						}}
						className='plus'
					>
						<Svg id='plus' w='15' h='15' color='#0BA360' />
					</button>
				</div>
			) : (
				<button key={id} className='add' onClick={() => addProduct(id)}>
					{price} ₽
				</button>
			)}
		</div>
	);
};

export default ProductCard;
