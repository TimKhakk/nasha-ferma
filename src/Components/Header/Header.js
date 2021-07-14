import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

	const [ isActive, setActive ] = useState(false);

	const toggleMenu = () => setActive(prevState => !prevState);

	return (
		<header className="header">

			<div className="container">

				<div className="header__row">

					<svg onClick={toggleMenu} className="header__burger"  width="24" height="24">
						<use href="icons.svg#burger"></use>
					</svg>


					<div className="logo">
						<Link to="/">Наша ферма</Link>
					</div>

					<nav className="nav">
						<ul className={isActive ? "nav__menu nav__menu_active" : "nav__menu"}>

							<div class="nav-menu-sm-top">
								<button class="nav-menu-sm-top__close">

									<svg onClick={toggleMenu} className="nav-menu-sm-top__close-svg"  width="24" height="24">
										<use href="icons.svg#cross"></use>
									</svg>

								</button>

								<div class="logo">
									<Link onClick={toggleMenu} to="/">Наша ферма</Link>
								</div>
							</div>

							<Link to="/auth" class="nav-menu-sm-auth">

								<svg className="nav-menu-sm-auth__svg"  width="20" height="20">
									<use href="icons.svg#person"></use>
								</svg>

								<span class="nav-menu-sm-auth__title">Войти</span>

							</Link>

							<Link to="/products" onClick={isActive ? toggleMenu : ""} className="nav__menu-item">Продукты</Link>
							<li className="nav__menu-item disabled">Курьерам</li>
							<li className="nav__menu-item disabled">О компании</li>
							<li className="nav__menu-item disabled">Фермерам</li>
						</ul>

						<ul className="nav__side">
							<Link to="/auth" className="nav__side-item">
								<svg className="nav__side-item-auth"  width="20" height="20">
									<use href="icons.svg#person"></use>
								</svg>
								<span onClick={isActive ? toggleMenu : ""} className="nav__side-item-auth-title">Войти</span>
							</Link>
							<Link to="/cart" className="nav__side-item">
								<svg className="nav__side-item-cart" width="20" height="20">
                  <use href="icons.svg#cart"></use>
                </svg>
								<span className="nav__side-item-cart-title">Корзина</span>
							</Link>
						</ul>
					</nav>

				</div>

			</div>
			<div onClick={isActive ? toggleMenu : ""} className={`shadow ${isActive ? "active" : ""}`}></div>
		</header>
	);
}

export default Header;
