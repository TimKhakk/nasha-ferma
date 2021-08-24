import Breadcrumbs from '../Default/Breadcrumbs';
import { useSpring, animated } from 'react-spring';

const Auth = () => {
	const styles = useSpring({
		loop: true,
		from: { rotateZ: 0 },
		to: { rotateZ: 180 },
	});
	return (
		<>
			<Breadcrumbs name={'Авторизация'} />
			<div className='container'>
				<animated.div
					style={{ width: '50px', height: '50px', background: 'tomato', ...styles }}
				/>
			</div>
		</>
	);
};

export default Auth;
