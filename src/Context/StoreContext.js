import { createContext, useContext, useState } from 'react';
import { data } from '../data';

// Hooks
import useLocalStorage from '../Hooks/useLocalStorage';

const StoreContext = createContext();

export const useStoreContext = () => useContext(StoreContext);

export const StoreContextProvider = ({ children }) => {
	const [modal, setModal] = useState(false);
	const [selProduct, setSelProduct] = useState({});

	const [cart, setCart] = useLocalStorage([], 'cartLocalStorage');
	const [category, setCategory] = useLocalStorage('Овощи', 'selectedCategoryLocalStorage');

	const changeCategory = category => setCategory(() => category);

	const сategories = [...new Set(data.map(item => item.category))]; // ["Овощи", "Молочные продукты"]

	const products = сategories.map(category => data.filter(item => item.category === category)); //  [ [], [] ]

	const categoriedProducts = data.filter(item => item.category === category); // [{"Овощи"}, {"Овощи"}]

	const groups = [...new Set(categoriedProducts.map(item => item.group))]; // ["Огурцы", "Томаты"]

	const toggleModal = () => {
		document.body.className === 'body-modal'
			? document.body.classList.remove('body-modal')
			: document.body.classList.add('body-modal');
		setModal(prev => !prev);
	};

	const plusProduct = id => {
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

	const removeProduct = id => setCart(prevCart => prevCart.filter(item => item.id !== id));

	const minusProduct = id => {
		setCart(prevCart => {
			const foundProduct = prevCart.find(item => item.id === id);
			if (foundProduct.count <= 1) {
				removeProduct(id);
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

	const addProduct = id => {
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
				modal,
				selProduct,
				setSelProduct,
				toggleModal,
				plusProduct,
				removeProduct,
				minusProduct,
				products,
				addProduct,
				countTotalPrice,
				categoriedProducts,
				groups,
				category,
				changeCategory,
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};
