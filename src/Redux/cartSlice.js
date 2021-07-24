import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [
			{
				id: 2,
				name: 'Огурец гладкий среднеплодный',
				price: 79,
				weight: 1000,
				category: 'Овощи',
				group: 'Огурцы',
				count: 1,
			},
			{
				id: 3,
				name: 'Огурец Малика',
				price: 549,
				weight: 1000,
				category: 'Овощи',
				group: 'Огурцы',
				count: 1,
			},
			{
				id: 4,
				name: 'Огурец сладкий',
				price: 149,
				weight: 1000,
				category: 'Овощи',
				group: 'Огурцы',
				count: 1,
			},
		],
		cart: [],
	},
	reducers: {
		addProduct: (state, action) => {
			state.cart.push(action.payload);
		},
		removeProduct: (state, action) => {
			state.cart = state.cart.filter(item => item.id !== action.payload.id);
		},
		plusProduct: (state, action) => {
			state.cart.map(item => {
				return item.id === action.payload.id ? (item.count += 1) : item;
			});
		},
		minusProduct: (state, action) => {
			state.cart.map(item => {
				if (item.id === action.payload.id) {
					if (item.count <= 1) {
						state.cart = state.cart.filter(
							item => item.id !== action.payload.id
						);
					}
					return (item.count -= 1);
				}
				return item;
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, plusProduct, minusProduct } =
	cartSlice.actions;

export default cartSlice.reducer;
