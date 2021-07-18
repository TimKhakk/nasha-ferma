
import FooterMiddle from './FooterMiddle';
import FooterTop    from './FooterTop';
import FooterBottom from './FooterBottom';

export default function Footer({changeCategory}) {
	return (
		<footer className="footer">

      <FooterTop />

      <FooterMiddle changeCategory={changeCategory}/>

      <FooterBottom />

		</footer>
	);
}
