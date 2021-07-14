import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="header">

			<div className="container">

				<div className="header__row">

					<svg className="header__burger"  width="24" height="24">
						<use href="icons.svg#burger"></use>
					</svg>


					<div className="logo">
						<Link to="/">Наша ферма</Link>
					</div>

					<nav className="nav">
						<ul className="nav__menu">

							<div class="nav-menu-sm-top">
								<button class="nav-menu-sm-top__close">

									<svg className="nav-menu-sm-top__close-svg"  width="24" height="24">
										<use href="icons.svg#cross"></use>
									</svg>

								</button>

								<div class="logo">
									<Link to="/">Наша ферма</Link>
								</div>
							</div>

							<Link to="/auth" class="nav-menu-sm-auth">

								<svg className="nav-menu-sm-auth__svg"  width="20" height="20">
									<use href="icons.svg#person"></use>
								</svg>

								<p class="nav-menu-sm-auth__title">Войти</p>

							</Link>

							<Link to="/products" className="nav__menu-item">Продукты</Link>
							<li className="nav__menu-item disabled">Курьерам</li>
							<li className="nav__menu-item disabled">О компании</li>
							<li className="nav__menu-item disabled">Фермерам</li>
						</ul>

						<ul className="nav__side">
							<Link to="/auth" className="nav__side-item">
								<svg className="nav__side-item-auth"  width="20" height="20">
									<use href="icons.svg#person"></use>
								</svg>
								<span className="nav__side-item-auth-title">Войти</span>
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
		</header>
	);
}

export default Header;
