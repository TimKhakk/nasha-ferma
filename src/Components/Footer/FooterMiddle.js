
import Container from '../Default/Container';
import { Link } from 'react-router-dom';

const FooterMiddle = ({changeCategory}) => {
  return(
    <div className="footer-middle">
      <Container>
        <div className="footer-middle__row">

          <div className="footer-middle__item">
            <Link to="/products" className="footer-middle__title">Продукты</Link>
            <ul className="footer-middle__list">
              <li className="footer-middle__li">
                <Link to="/products" onClick={() => changeCategory('Овощи')} className="footer-middle__link">Овощи</Link>
              </li>
              <li className="footer-middle__li">
                <Link to="/products" onClick={() => changeCategory('Фрукты')} className="footer-middle__link">Фрукты</Link>
              </li>
              <li className="footer-middle__li">
                <Link to="/products" onClick={() => changeCategory('Ягоды')} className="footer-middle__link">Ягоды</Link>
              </li>
              <li className="footer-middle__li">
                <Link to="/products" onClick={() => changeCategory('Молочные продукты')} className="footer-middle__link">Молочные продукты</Link>
              </li>
              <li className="footer-middle__li">
                <Link to="/products" onClick={() => changeCategory('Мёд и варенье')} className="footer-middle__link">Мёд и варенье</Link>
              </li>
              <li className="footer-middle__li">
                <Link to="/products" onClick={() => changeCategory('Яйца')} className="footer-middle__link">Яйца</Link>
              </li>
            </ul>
          </div>

          <div className="footer-middle__item">
            <h3 className="footer-middle__title">Регионы</h3>
            <ul className="footer-middle__list">
              <li className="footer-middle__li">
                <span className="footer-middle__link">Москва</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Санкт-Петербург</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Алабушево</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Алапаевск</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Алейск</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Показать все
                  <svg className="breadcrumb__arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="icons.svg#breadcrumb-arrow"></use>
                  </svg>
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-middle__item">
            <h3 className="footer-middle__title">О компании</h3>
            <ul className="footer-middle__list">
              <li className="footer-middle__li">
                <span className="footer-middle__link">Фермерам</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Курьерам</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Контакты</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Доставка</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Пользовательское соглашение</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Стать партнёром</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Стать курьером</span>
              </li>
              <li className="footer-middle__li">
                <span className="footer-middle__link">Переработка пластика</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>

  )
};

export default FooterMiddle;
