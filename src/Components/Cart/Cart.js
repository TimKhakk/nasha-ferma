import Breadcrumbs from "../Default/Breadcrumbs";

function Cart() {
	return (
		<>
			<Breadcrumbs

				paths={[{
					name: "Продукты",
					path: "products"
				}]}

				name={"Корзина"}
			/>
			<div className="container">
				Страница корзины
			</div>
		</>
	);
}

export default Cart;