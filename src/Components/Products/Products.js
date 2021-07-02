import Breadcrumbs  from '../Default/Breadcrumbs';
import Categories   from "./Categories";
import ProductCards from "./ProductCards";
import MiniCart     from "./MiniCart";

import { data } from '../../data';
import { useState } from "react";

function Products() {

	const allCategories = [...new Set(data.map(item => item.category))]; // ["Огурцы", "Томаты"]
	const products = allCategories.map(category => data.filter(item => item.category === category)); //  [ [], [] ]

	const [ cart, setCart ] = useState([]);

	const plusProduct = (id, prevCart, sameItem) => {
		const updatedCart = prevCart.filter(item => item.id !== sameItem.id);

		const updatedProduct = {...sameItem, count: sameItem.count + 1};

		return [...updatedCart, updatedProduct]
	};

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
			return updatedCart;
		})
	};

	const deleteProduct = (id) => setCart(prevCart => {
		return prevCart.filter(item => {
			return item.id !== id;
		});
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
			return updatedCart;
		})
	};


	// Добавляем товар в корзину
	const addToCart = (id) => {
		setCart(prevCart => {
			const newProduct = data.find(item => item.id === id);
			newProduct.count = 1;

			// Если товар в корзине уже есть, то добавить количество
			// const sameItem = prevCart.find(item => item.id === newProduct.id);
			// if (sameItem !== undefined) {
			// 	return plusProduct(id, prevCart, sameItem);
			// }
			// const sameItem = prevCart.find(item => item.id === newProduct.id);
			// if (sameItem !== undefined) {
			// 	return plusProductToCart(id);
			// }

			// Если товар в корзине нет, то добавить
			return [...prevCart, newProduct]

		})
	};

	// Считаем всю сумму
	const countTotalPrice = () => cart.reduce((sum, item) => sum + (item.price * item.count), 0);

	console.log('Корзина пользователя: ', cart);
	console.log('Товаров в корзине на сумму: ', countTotalPrice());


	return (
		<div className="products">

			<Breadcrumbs name={"Продукты"} />

			<div className="container">

				<div className="products__row">

					<Categories   products={products}/>

					<ProductCards
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						products={products}
						addToCart={addToCart}
					/>

					<MiniCart
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						countTotalPrice={countTotalPrice}
					/>

				</div>
			</div>
		</div>
	);
}

export default Products;