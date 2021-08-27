import { useStoreContext } from '../../../Context/StoreContext';
import Svg from '../../Default/Svg';

const MiniCartItem = ({ item }) => {
	const { id, name, weight, price, count } = item;
	const { plusProduct, removeProduct, minusProduct } = useStoreContext();
	return (
		<div key={id} className='item'>
			<p className='item__title'>
				{name}, {weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}
			</p>

			<span className='item__total-price'>{price * count} ₽</span>

			<button className='item__minus' onClick={() => minusProduct(id)}>
				<Svg id='minus' w='12' h='2' />
			</button>

			<span className='item__total-count'>{count}</span>

			<button onClick={() => plusProduct(id)} className='item__plus'>
				<Svg id='plus' w='12' h='12' />
			</button>

			<button className='item__delete' onClick={() => removeProduct(id)}>
				<Svg id='delete' w='19' h='19' />
			</button>

			<span className='item__price'>{price} ₽</span>
		</div>
	);
};

export default MiniCartItem;
