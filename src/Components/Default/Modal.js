import { useStoreContext } from '../../Context/StoreContext';
import Svg from './Svg';

const Modal = () => {
	const { cart, toggleModal, selProduct, addProduct, minusProduct, plusProduct } =
		useStoreContext();
	const {
		id,
		name,
		farm,
		averageWeightOfUnit,
		country,
		deliveryTime,
		reviews,
		expirationDate,
		price,
		weight,
		bigImgUrl,
	} = selProduct;

	return (
		<div className='modal-bg' onClick={toggleModal}>
			<div className='modal' onClick={e => e.stopPropagation()}>
				<div className='top'>
					<p>
						<Svg id='package' w='20' h='20' />
						{deliveryTime - 10} - {deliveryTime} мин
					</p>
					<p>Доставка: 0 ₽</p>
					<p>{reviews} отзыва</p>
				</div>

				<div className='content'>
					<img src={bigImgUrl} alt={name} />
					<div className='info'>
						<h2>{name}</h2>
						<ul>
							<li>
								<span>Ферма:</span>
								<span className='primary-color'>{farm}</span>
							</li>
							<li>
								<span>Срок годности:</span>
								<span>{expirationDate}</span>
							</li>
							<li>
								<span>Страна:</span>
								<span>{country}</span>
							</li>
							<li>
								<span>Средний вес единицы:</span>
								<span>{averageWeightOfUnit} г</span>
							</li>
							<li>
								<span>
									Цена за {weight >= 1000 ? <>{weight / 1000} кг</> : <>{weight} г</>}:{' '}
								</span>
								<span>{price} ₽</span>
							</li>
						</ul>
					</div>
					<div></div>
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
						<button
							className='add'
							onClick={() => {
								toggleModal();
								addProduct(id);
							}}
						>
							В корзину
						</button>
					)}
				</div>
				<button className='close' onClick={toggleModal}>
					<Svg id='close' w='33' h='33' />
				</button>
			</div>
		</div>
	);
};

export default Modal;
