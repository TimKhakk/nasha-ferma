import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import Header   from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Products from './Components/Products/Products';
import Cart     from './Components/Cart/Cart';
import Auth     from './Components/Auth/Auth';

import { data } from './data';
import { useState } from "react";


function App() {

	const allCategories = [...new Set(data.map(item => item.category))]; // ["Огурцы", "Томаты"]
	const products = allCategories.map(category => data.filter(item => item.category === category)); //  [ [], [] ]

	const getLocalStorage = () => JSON?.parse(localStorage.getItem('cartLocalStorage')) || [];
	const setLocalStorage = data => localStorage.setItem('cartLocalStorage', JSON.stringify(data));

	const [ cart, setCart ] = useState(getLocalStorage);

	const [ category, setCategory ] = useState('Овощи');

	const filterProducts = (value) => {
		const newProducts = data.filter(item => item[value] === value)
		return newProducts;
	};

	const categoriedProducts = filterProducts(category); // [{}, {}]

	console.log('Продукты по категории', categoriedProducts);

	const plusProductToCart = (id) => {
		setCart(prevCart => {
			const foundProduct = prevCart.find(item => item.id === id);
			const updatedProduct = {...foundProduct, count: foundProduct.count + 1};

			const updatedCart = prevCart.map(item => {
				if (item.id === updatedProduct.id) {
					return updatedProduct
				} else {
					return item
				}
			})
			setLocalStorage(updatedCart);
			return updatedCart;
		})
	};

	const deleteProduct = (id) => setCart(prevCart => {
		const updatedCart = prevCart.filter(item => item.id !== id);
		setLocalStorage(updatedCart);
		return updatedCart;
	})

	const minusProductToCart = (id) => {
		setCart(prevCart => {
			const foundProduct = prevCart.find(item => item.id === id);
			if(foundProduct.count <= 1) {
				deleteProduct(id)
			}
			const updatedProduct = {...foundProduct, count: foundProduct.count - 1};

			const updatedCart = prevCart.map(item => {
				if (item.id === updatedProduct.id) {
					return updatedProduct;
				} else {
					return item
				}
			});

			setLocalStorage(updatedCart);
			return updatedCart;
		})
	};

	const addToCart = (id) => {
		setCart(prevCart => {
			const newProduct = data.find(item => item.id === id);
			newProduct.count = 1;
			const updatedCart = [...prevCart, newProduct];

			setLocalStorage(updatedCart);

			return updatedCart;

		})
	}; // Добавляем товар в корзину

	const countTotalPrice = () => cart.reduce((sum, item) => sum + (item.price * item.count), 0); // Считаем всю сумму

	console.log('Корзина пользователя из App: ', cart);
	console.log('Товаров в корзине на сумму из App: ', countTotalPrice());

	return (
		<div className="app">
			<Router>

				<Header/>
				<Route path="/" exact   component={Homepage}/>

				<Route path="/products">
					<Products
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						products={products}
						addToCart={addToCart}
						countTotalPrice={countTotalPrice}
					/>
				</Route>

				<Route path="/cart">
					<Cart
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						countTotalPrice={countTotalPrice}
					/>
				</Route>

				<Route path="/auth"     component={Auth}/>

			</Router>
		</div>
	);
}

export default App;
