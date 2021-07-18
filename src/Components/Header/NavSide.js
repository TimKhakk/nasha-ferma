import { Link } from 'react-router-dom';

const NavSide = () => {
  return (
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
  )
}

export default NavSide;
