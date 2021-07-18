import Container from '../Default/Container';

const FooterBottom = () => {
  return(
    <div className="footer-bottom">
      <Container>
        <div className="footer-bottom__row">
          <span className="footer-bottom__rights">© 2020–2021 ООО «Наша ферма»</span>

          <div className="footer-bottom__media">

            <a href="https://vk.com" className="footer-bootom__item">
              <svg width="37" height="37">
                <use href="icons.svg#vkontakte"></use>
              </svg>
            </a>

            <a href="https://instagram.com" className="footer-bootom__item">
              <svg width="37" height="37">
                <use href="icons.svg#instagram"></use>
              </svg>
            </a>

            <a href="https://facebook.com" className="footer-bootom__item">
              <svg width="37" height="37">
                <use href="icons.svg#facebook"></use>
              </svg>
            </a>

            <a href="https://youtube.com" className="footer-bootom__item">
              <svg width="37" height="37">
                <use href="icons.svg#youtube"></use>
              </svg>
            </a>

          </div>
        </div>
      </Container>
    </div>
  )
};

export default FooterBottom;
