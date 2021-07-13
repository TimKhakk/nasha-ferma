import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="header">

			<div className="container">

				<div className="header__row">


					<div className="logo">
						<Link to="/">Наша ферма</Link>
					</div>

					<nav className="nav">
						<ul className="nav__menu">
							<Link to="/products" className="nav__menu-item">Продукты</Link>
							<li className="nav__menu-item disabled">Курьерам</li>
							<li className="nav__menu-item disabled">О компании</li>
							<li className="nav__menu-item disabled">Фермерам</li>
						</ul>

						<ul className="nav__side">
							<Link to="/auth" className="nav__side-item">Войти</Link>
							<Link to="/cart" className="nav__side-item">
								<svg className="nav__side-item-cart" width="20" height="20">
                  <use href="icons.svg#cart"></use>
                </svg>
								Корзина
							</Link>
						</ul>
					</nav>

				</div>

			</div>
		</header>
	);
}

export default Header;
