import Container from '../Default/Container';
import PromoBlock from './PromoBlock/PromoBlock';
import Collection from './Collection/Collection';
import { useStoreContext } from '../../Context/StoreContext';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import shuffle from '../../shuffle';

function Homepage() {
	const { data, changeCategory } = useStoreContext();
	const [search, setSearch] = useState('');
	const [showResult, setShowResult] = useState(false);
	const searchRef = useRef();

	const allNames = data.map(item => item.name);
	const allGroups = [...new Set(data.map(item => item.group))];
	const allCategories = [...new Set(data.map(item => item.category))];

	const getAllWords = () => {
		const all = [...allNames, ...allGroups, ...allCategories];
		return [...new Set(all)];
	};

	const allWords = getAllWords();

	const takeRandom = quantity => shuffle(allWords).slice(0, quantity);

	const randomProducts = takeRandom(4);

	const renderRandomProducts = randomProducts.map(i => (
		<li key={allWords[i - 1]}>
			<Link to='/products'>{allWords[i - 1]}</Link>
		</li>
	));

	const newResult = allWords.filter(word => {
		return word.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<div className='homepage'>
			<Container>
				<div className='homepage__row'>
					<div className='homepage-main'>
						<img src='main-img.webp' alt='овощи на доске' />
						<div className='wrapper'>
							<h1>Доставка фермерских продуктов</h1>
							<label>
								<input
									ref={searchRef}
									value={search}
									onChange={e => setSearch(e.target.value)}
									onClick={() => setShowResult(true)}
									placeholder='Введите название продукта'
									type='text'
								/>
								<button onClick={() => searchRef.current.focus()}>Найти</button>
								<ul style={{ display: showResult ? 'flex' : 'none' }}>
									{search !== ''
										? newResult.slice(0, 4).map(item => {
												if (allCategories.find(category => category === item)) {
													return (
														<li
															key={item}
															onClick={() => {
																console.log('категория');
															}}
														>
															<Link
																onClick={() => {
																	changeCategory(item);
																}}
																to='/products'
															>
																{item}
															</Link>
														</li>
													);
												} else if (allGroups.find(group => group === item)) {
													const itemsGroup = data.find(product => product.group === item);
													return (
														<li
															key={item}
															onClick={() => {
																console.log('группа');
															}}
														>
															<Link
																onClick={() => {
																	changeCategory(itemsGroup.category);
																}}
																to='/products'
															>
																{item}
															</Link>
														</li>
													);
												} else {
													const exactProduct = data.find(product => product.name === item);
													return (
														<li
															key={item}
															onClick={() => {
																console.log('клик');
															}}
														>
															<Link to='/products'>{item}</Link>
														</li>
													);
												}
										  })
										: renderRandomProducts}
									{}
								</ul>
							</label>
						</div>
					</div>
				</div>
			</Container>

			<PromoBlock />

			<Collection />
		</div>
	);
}

export default Homepage;
