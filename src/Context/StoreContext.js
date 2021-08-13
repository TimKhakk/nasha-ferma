import { createContext, useContext } from 'react';

import { data } from '../data';

// Hooks
import useLocalStorage from '../Hooks/useLocalStorage';

const StoreContext = createContext();

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = ({ children }) => {
	const [cart, setCart] = useLocalStorage([], 'cartLocalStorage');
	const [category, setCategory] = useLocalStorage('Овощи', 'selectedCategoryLocalStorage');

	const changeCategory = category => setCategory(() => category);

	const сategories = [...new Set(data.map(item => item.category))]; // ["Овощи", "Молчные продукты"]
	const products = сategories.map(category => data.filter(item => item.category === category)); //  [ [], [] ]
	const categoriedProducts = data.filter(item => item.category === category); // [{"Овощи"}, {"Овощи"}]
	const groups = [...new Set(categoriedProducts.map(item => item.group))]; // ["Огурцы", "Томаты"]

	const plusProductToCart = id => {
		setCart(prevCart => {
			const foundProduct = prevCart.find(item => item.id === id);
			const updatedProduct = {
				...foundProduct,
				count: foundProduct.count + 1,
			};

			const updatedCart = prevCart.map(item => {
				if (item.id === updatedProduct.id) {
					return updatedProduct;
				} else {
					return item;
				}
			});
			return updatedCart;
		});
	};

	const deleteProduct = id => setCart(prevCart => prevCart.filter(item => item.id !== id));

	const minusProductToCart = id => {
		setCart(prevCart => {
			const foundProduct = prevCart.find(item => item.id === id);
			if (foundProduct.count <= 1) {
				deleteProduct(id);
			}
			const updatedProduct = {
				...foundProduct,
				count: foundProduct.count - 1,
			};

			const updatedCart = prevCart.map(item => {
				if (item.id === updatedProduct.id) {
					return updatedProduct;
				} else {
					return item;
				}
			});

			return updatedCart;
		});
	};

	const addProductToCart = id => {
		setCart(prevCart => {
			const newProduct = data.find(item => item.id === id);
			newProduct.count = 1;
			return [...prevCart, newProduct];
		});
	};

	const countTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.count, 0);

	return (
		<StoreContext.Provider
			value={{
				cart,
				plusProductToCart,
				deleteProduct,
				minusProductToCart,
				products,
				addProductToCart,
				countTotalPrice,
				categoriedProducts,
				groups,
				changeCategory,
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};
