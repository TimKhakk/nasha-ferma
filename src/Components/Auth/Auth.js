import Breadcrumbs from '../Default/Breadcrumbs';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
	addProduct,
	removeProduct,
	plusProduct,
	minusProduct,
} from '../../Redux/cartSlice';

const Auth = () => {
	// Redux Hooks
	const cart = useSelector(store => store.cart.cart);
	const products = useSelector(store => store.cart.products);
	const dispatch = useDispatch();

	const renderBtns = item => {
		cart.map(child => {
			if (child.id === item.id) {
				return (
					<>
						<button
							type='button'
							className='btn btn-primary fs-4'
							onClick={() => {
								dispatch(plusProduct({ id: item.id }));
							}}
						>
							+
						</button>
						<span>{child.count}</span>
						<button
							type='button'
							className='btn btn-primary fs-4'
							onClick={() => {
								dispatch(minusProduct({ id: item.id }));
							}}
						>
							-
						</button>
					</>
				);
			}
			return (
				<button
					onClick={() => {
						dispatch(addProduct(item));
					}}
					type='button'
					className='btn btn-primary'
				>
					В корзину
				</button>
			);
		});
	};

	return (
		<>
			<Breadcrumbs name={'Авторизация'} />
			<div className='container'>
				<div className='redux bg-dark'>
					<h4 className='text-white fs-3'>Продукты</h4>
					<div className='redux-products'>
						{products.map(item => (
							<div className='card' key={item.id} style={{ width: 18 + 'rem' }}>
								<div className='card-body'>
									<h5 className='card-title'>{item.name}</h5>
									<h6 className='card-subtitle mb-2 text-muted'>
										{item.price} ₽
									</h6>
									<p className='card-text'>
										<span className='badge bg-success'>{item.category}</span>
										<span className='badge bg-success'>{item.group}</span>
									</p>
									<button
										onClick={() => {
											dispatch(addProduct(item));
										}}
										type='button'
										className='btn btn-primary'
									>
										В корзину
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='redux bg-light'>
					<h4 className='title fs-3'>Корзина</h4>
					<div className='redux-cart'>
						{cart.map(item => (
							<div className='card' key={item.id} style={{ width: 18 + 'rem' }}>
								<div className='card-body'>
									<h5 className='card-title'>{item.name}</h5>
									<h6 className='card-subtitle mb-2 text-muted'>
										{item.price} ₽
									</h6>
									<h6 className='card-subtitle mb-2 text-muted'>
										Количество: {item.count}
									</h6>
									<button
										type='button'
										className='btn btn-primary fs-4'
										onClick={() => {
											dispatch(plusProduct({ id: item.id }));
										}}
									>
										+
									</button>
									<button
										type='button'
										className='btn btn-primary fs-4'
										onClick={() => {
											dispatch(minusProduct({ id: item.id }));
										}}
									>
										-
									</button>
									<button
										type='button'
										className='btn btn-primary fs-4'
										onClick={() => {
											dispatch(removeProduct({ id: item.id }));
										}}
									>
										🗑
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Auth;
