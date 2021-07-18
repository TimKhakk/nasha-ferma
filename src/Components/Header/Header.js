import NavSide from './NavSide';
import Logo from '../Default/Logo';
import Container    from '../Default/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {

	const [ isActive, setActive ] = useState(false);

	const openMenu = () => setActive(prevState => true);
	const closeMenu = () => setActive(prevState => false);

	return (
		<header className="header">

			<Container>

				<div className="header__row">

					<svg onClick={openMenu} className="header__burger"  width="24" height="24">
						<use href="icons.svg#burger"></use>
					</svg>


					<Logo />

					<nav className="nav">
						<ul className={isActive ? "nav__menu nav__menu_active" : "nav__menu"}>

							<div className="nav-menu-sm-top">
								<button className="nav-menu-sm-top__close">

									<svg onClick={closeMenu} className="nav-menu-sm-top__close-svg"  width="24" height="24">
										<use href="icons.svg#cross"></use>
									</svg>

								</button>

								<div className="logo">
									<Link onClick={closeMenu} to="/">Наша ферма</Link>
								</div>
							</div>

							<Link to="/auth" className="nav-menu-sm-auth">

								<svg className="nav-menu-sm-auth__svg"  width="20" height="20">
									<use href="icons.svg#person"></use>
								</svg>

								<span onClick={closeMenu} className="nav-menu-sm-auth__title">Войти</span>

							</Link>

							<Link to="/products" onClick={closeMenu} className="nav__menu-item">Продукты</Link>
							<li className="nav__menu-item disabled">Курьерам</li>
							<li className="nav__menu-item disabled">О компании</li>
							<li className="nav__menu-item disabled">Фермерам</li>
						</ul>

						<NavSide />
					</nav>

				</div>

			</Container>
			<div onClick={closeMenu} className={`shadow ${isActive ? "active" : ""}`}></div>
		</header>
	);
}

export default Header;
