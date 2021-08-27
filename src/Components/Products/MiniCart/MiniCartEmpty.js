import Svg from '../../Default/Svg';

const MiniCartEmpty = () => {
	return (
		<div className='empty'>
			<Svg id='cart' w='66' h='65' color='#9F9F9F' />
			<span className='empty__title'>
				Выберите товары
				<br />и добавьте их к заказу
			</span>
		</div>
	);
};

export default MiniCartEmpty;
