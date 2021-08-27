import Breadcrumbs from '../Default/Breadcrumbs';
import { useTransition, animated as a } from 'react-spring';
import { useState } from 'react';

const Auth = () => {
	const [items, setItems] = useState([]);
	const transition = useTransition(items, {
		from: { x: 200, opacity: 0 },
		enter: { x: 0, opacity: 1 },
		leave: { x: 200, opacity: 0 },
	});

	return (
		<>
			<Breadcrumbs name={'Авторизация'} />
			<div className='container auth'>
				<button onClick={() => setItems(p => (p.length ? [] : [{}, {}, {}]))}>
					{items ? 'Show' : 'Hide'}
				</button>

				{transition((style, item) => item && <a.div style={style} className='spring' />)}
			</div>
		</>
	);
};

export default Auth;
