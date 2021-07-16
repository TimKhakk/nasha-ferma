import { Link } from 'react-router-dom';

export default function Footer({changeCategory}) {
	return (
		<footer className="footer">

      <div className="footer__top">
        <div className="container">
          <div className="footer__top-row">

            <div className="logo footer-logo">
              <Link to="/">Наша ферма</Link>
            </div>

            <button className="footer-top__download-btn">
              <img src="images/App Store.png" alt="App Store" />
            </button>

            <button className="footer-top__download-btn">
              <img src="images/Google play.png" alt="Google play" />
            </button>

          </div>
			  </div>
      </div>

      <div className="footer-middle">
        <div className="container">
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
        </div>
		  </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__row">
            <span className="footer-bottom__rights">© 2020–2021 ООО «Наша ферма»</span>

            <div className="footer-bottom__media">

              <a href="https://vk.com" className="footer-bootom__item">
                <svg width="37" height="37">
                  <use href="icons.svg#vkontakte"></use>
                </svg>
              </a>

              <a href="https://vk.com" className="footer-bootom__item">
                <svg width="37" height="37">
                  <use href="icons.svg#instagram"></use>
                </svg>
              </a>

              <a href="https://vk.com" className="footer-bootom__item">
                <svg width="37" height="37">
                  <use href="icons.svg#facebook"></use>
                </svg>
              </a>

              <a href="https://vk.com" className="footer-bootom__item">
                <svg width="37" height="37">
                  <use href="icons.svg#youtube"></use>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
		</footer>
	);
}
