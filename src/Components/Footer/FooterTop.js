import Logo from '../Default/Logo';
import DownloadButtons from './DownloadButtons';
import Container    from '../Default/Container';

const FooterTop = () => {
  return(
    <div className="footer__top">
      <Container>
        <div className="footer__top-row">
          <Logo />
          <DownloadButtons />
        </div>
      </Container>
    </div>
  )
}

export default FooterTop;
