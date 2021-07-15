import { Link } from 'react-router-dom';

export default function Footer() {
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
              <h3 className="footer-middle__title">Продукты</h3>
              <ul className="footer-middle__list">
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Овощи</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Фрукты</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Ягоды</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Молочные продукты</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Мёд и варенье</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Яйца</a>
                </li>
              </ul>
            </div>

            <div className="footer-middle__item">
              <h3 className="footer-middle__title">Регионы</h3>
              <ul className="footer-middle__list">
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Москва</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Санкт-Петербург</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Алабушево</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Алапаевск</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Алейск</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Показать все ></a>
                </li>
              </ul>
            </div>

            <div className="footer-middle__item">
              <h3 className="footer-middle__title">О компании</h3>
              <ul className="footer-middle__list">
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Фермерам</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Курьерам</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Контакты</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Доставка</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Пользовательское соглашение</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Стать партнёром</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Стать курьером</a>
                </li>
                <li className="footer-middle__li">
                  <a href="#" className="footer-middle__link">Переработка пластика</a>
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
