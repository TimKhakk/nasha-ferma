import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default function Footer() {
	return (
		<footer className='footer'>
			<FooterTop />

			<FooterMiddle />

			<FooterBottom />
		</footer>
	);
}
