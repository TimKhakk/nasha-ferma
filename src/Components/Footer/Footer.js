import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footer">

      <div className="footer__top">
        <div className="container">
          <div className="footer__top-row">

            <div className="logo">
              <Link to="/">Наша ферма</Link>
            </div>

            <button className="footer-top__download-btn">

            </button>

            <button className="footer-top__download-btn">

            </button>

          </div>
			  </div>
      </div>

      <div className="footer-middle">
        <div className="container">
          <div className="footer-middle__row">

            <div className="footer__middle-item">
              <h3 className="footer__middle-title">Продукты</h3>
              <ul className="footer__middle-list">
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Овощи</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Фрукты</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Ягоды</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Молочные продукты</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Мёд и варенье</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Яйца</a>
                </li>
              </ul>
            </div>

            <div className="footer__middle-item">
              <h3 className="footer__middle-title">Регионы</h3>
              <ul className="footer__middle-list">
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Москва</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Санкт-Петербург</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Алабушево</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Алапаевск</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Алейск</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Показать все ></a>
                </li>
              </ul>
            </div>

            <div className="footer__middle-item">
              <h3 className="footer__middle-title">О компании</h3>
              <ul className="footer__middle-list">
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Фермерам</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Курьерам</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Контакты</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Доставка</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Пользовательское соглашение</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Стать партнёром</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Стать курьером</a>
                </li>
                <li className="footer__main-li">
                  <a href="#" className="footer__main-link">Переработка пластика</a>
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
                  <g clip-path="url(#clip0)">
                    <path d="M36.217 18.109C36.217 8.106 28.111 0 18.11 0 8.106 0 0 8.106 0 18.109 0 28.11 8.106 36.217 18.109 36.217c.106 0 .212 0 .318-.007V22.12h-3.89v-4.535h3.89v-3.339c0-3.869 2.363-5.977 5.814-5.977 1.656 0 3.078.12 3.488.177v4.046h-2.377c-1.875 0-2.242.891-2.242 2.2v2.886h4.49l-.587 4.534H23.11v13.405c7.569-2.172 13.107-9.14 13.107-17.408z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" d="M0 0h36.217v36.217H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="https://vk.com" className="footer-bootom__item">
                <svg width="37" height="37">
                  <g clip-path="url(#clip0)">
                    <path d="M18.543 35.736c9.762 0 17.675-8 17.675-17.868C36.218 8 28.305 0 18.543 0S.867 8 .867 17.868c0 9.868 7.914 17.868 17.676 17.868z" ></path>
                    <path d="M27.091 22.753c-.706-1.324-2.524-2.916-3.274-3.608a.524.524 0 01-.041-.727c1.433-1.605 2.578-3.449 2.973-4.563.174-.492-.187-1.012-.694-1.012h-1.474c-.486 0-.77.182-.906.471-1.19 2.543-2.212 3.644-2.927 4.287-.4.36-1.024.062-1.024-.486v-3.39c0-.47-.369-.85-.823-.85l-2.693-.032c-.339 0-.532.4-.33.68l.446.666c.167.23.257.51.257.799l-.002 2.996a.563.563 0 01-.966.41c-1.217-1.235-2.273-3.758-2.654-4.965a.824.824 0 00-.78-.586l-1.452-.004c-.544 0-.943.539-.795 1.08 1.327 4.856 4.05 9.475 8.902 9.975.477.05.89-.352.89-.848V21.47c0-.452.34-.84.776-.852h.046c1.284 0 2.72 1.947 3.224 2.858a.808.808 0 00.707.421h1.953c.57 0 .936-.63.661-1.145z" fill="#fff"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" transform="translate(.446)" d="M0 0h36.217v36.217H0z"></path>
                    </clipPath>
                  </defs>
                  </svg>
              </a>

              <a href="https://vk.com" className="footer-bootom__item">
                <svg width="37" height="37">
                  <g clip-path="url(#clip0)">
                    <path d="M18.969 35.725c9.983 0 18.077-7.914 18.077-17.676 0-9.762-8.093-17.675-18.077-17.675C8.985.374.89 8.287.89 18.049s8.095 17.676 18.08 17.676z"></path>
                    <path d="M15.152 10.021c-2.426 0-4.394 1.924-4.394 4.297v6.873c0 2.373 1.968 4.297 4.394 4.297h7.03c2.427 0 4.394-1.924 4.394-4.297v-6.873c0-2.373-1.968-4.296-4.394-4.296h-7.03zm8.788 1.719a.87.87 0 01.878.86.87.87 0 01-.878.858.87.87 0 01-.879-.859.87.87 0 01.879-.86zm-5.273 1.718c2.426 0 4.394 1.924 4.394 4.296 0 2.373-1.968 4.297-4.394 4.297s-4.394-1.924-4.394-4.296c0-2.373 1.968-4.297 4.394-4.297zm0 1.719c-.699 0-1.37.271-1.864.755a2.549 2.549 0 00-.772 1.822c0 .684.278 1.34.772 1.823a2.667 2.667 0 001.864.755c.7 0 1.37-.271 1.864-.755a2.547 2.547 0 00.773-1.823c0-.683-.278-1.339-.773-1.822a2.667 2.667 0 00-1.864-.755z" fill="#fff"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" transform="translate(.891)" d="M0 0h36.217v36.217H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="https://vk.com" className="footer-bootom__item">
                <svg width="37" height="37">
                  <circle cx="18.446" cy="18.109" r="18.109"></circle>
                  <g clip-path="url(#clip0)">
                    <path d="M27.98 13.305a2.476 2.476 0 00-1.742-1.742c-1.546-.424-7.733-.424-7.733-.424s-6.187 0-7.734.408a2.527 2.527 0 00-1.742 1.758c-.407 1.546-.407 4.754-.407 4.754s0 3.224.407 4.754a2.477 2.477 0 001.742 1.742c1.563.424 7.734.424 7.734.424s6.187 0 7.733-.408a2.476 2.476 0 001.743-1.742c.407-1.546.407-4.754.407-4.754s.016-3.223-.408-4.77z" fill="#fff"></path>
                    <path d="M16.535 21.022l5.145-2.963-5.145-2.963v5.926z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" transform="translate(8.622 8.167)" d="M0 0h19.766v19.766H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
		</footer>
	);
}
