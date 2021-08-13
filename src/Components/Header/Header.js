import NavSide from './NavSide';
import Logo from '../Default/Logo';
import Container from '../Default/Container';
import Svg from '../Default/Svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
	const [isActive, setActive] = useState(false);

	const openMenu = () => setActive(true);
	const closeMenu = () => setActive(false);

	return (
		<header className='header'>
			<Container>
				<div className='header__row'>
					<svg onClick={openMenu} className='header__burger' width='24' height='24'>
						<use href='icons.svg#burger'></use>
					</svg>

					<Logo />

					<nav className='nav'>
						<ul className={isActive ? 'nav__menu nav__menu_active' : 'nav__menu'}>
							<div className='nav-menu-sm-top'>
								<button onClick={closeMenu} className='nav-menu-sm-top__close'>
									<Svg id={'cross'} wh={'24'} />
								</button>

								<div className='logo'>
									<Link onClick={closeMenu} to='/'>
										Наша ферма
									</Link>
								</div>
							</div>

							<Link to='/auth' onClick={closeMenu} className='nav-menu-sm-auth'>
								<Svg id={'person'} wh={'20'} />

								<span className='nav-menu-sm-auth__title'>Войти</span>
							</Link>

							<Link to='/products' onClick={closeMenu} className='nav__menu-item'>
								Продукты
							</Link>
							<li className='nav__menu-item disabled'>Курьерам</li>
							<li className='nav__menu-item disabled'>О компании</li>
							<li className='nav__menu-item disabled'>Фермерам</li>
						</ul>

						<NavSide />
					</nav>
				</div>
			</Container>

			{isActive && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, transition: 0.2 }}
					onClick={closeMenu}
					className={`shadow active`}
				/>
			)}
		</header>
	);
}

export default Header;
