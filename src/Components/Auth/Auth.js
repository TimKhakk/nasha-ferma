import Breadcrumbs from '../Default/Breadcrumbs';
import { useTransition, animated as a } from 'react-spring';
import { useState, useRef, useEffect } from 'react';

const Auth = () => {
	const boxRef = useRef();
	const [items, setItems] = useState([
		{ id: 'First item' },
		{ id: 'Second item' },
		{ id: 'Third item' },
		{ id: 'Forth item' },
	]);

	const [boxHeight, setBoxHeight] = useState(null);

	const [cart, setCart] = useState([
		{ id: 'First item' },
		{ id: 'Second item' },
		{ id: 'Third item' },
		{ id: 'Forth item' },
	]);

	useEffect(() => {
		setBoxHeight(boxRef.current.offsetHeight);
	}, []);

	const add = id => {
		const product = items.find(item => item.id === id);
		setBoxHeight(p => (p += 70));
		setTimeout(() => {
			setCart(prev => [...prev, product]);
		}, 600);
	};

	const remove = id => {
		setCart(prev => prev.filter(item => item.id !== id));

		setTimeout(() => {
			setBoxHeight(p => (p -= 70));
		}, 600);
	};

	const transitions = useTransition(cart, {
		initial: { x: 0, opacity: 1 },
		from: { x: 200, opacity: 0 },
		enter: { x: 0, opacity: 1 },
		leave: { x: 200, opacity: 0 },
	});

	return (
		<>
			{/* <Breadcrumbs name={'Авторизация'} /> */}
			<div className='container auth'>
				<div className='items'>
					{items.map(({ id }) => (
						<div key={id} className='item'>
							<h3>{id}</h3>

							{cart.find(item => item.id === id) ? (
								<button onClick={() => remove(id)}>Remove</button>
							) : (
								<button onClick={ev => add(id)}>Add</button>
							)}
						</div>
					))}
				</div>
				<div ref={boxRef} className='box' style={{ height: boxHeight }}>
					<h2>Корзина</h2>
					<ul>
						{transitions((props, item) => (
							<a.li style={props}>
								{item.id}
								<button onClick={() => remove(item.id)}>Remove</button>
							</a.li>
						))}
					</ul>
					<button className='buy'>Buy</button>
				</div>
			</div>
		</>
	);
};

export default Auth;
