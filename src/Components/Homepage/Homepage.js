import Container from '../Default/Container';
import PromoBlock from './PromoBlock/PromoBlock';

function Homepage() {
	return (
		<>
			<div className="homepage">
				<Container>
					<div className="homepage__row">
						<div className="homepage-main">
							<img className="homepage-main__main-img" src="images/main-img.webp" alt="овощи на доске" />
							<h1 className="homepage-main__title">Доставка фермерских продуктов</h1>
						</div>
					</div>


				</Container>


				<PromoBlock />
			</div>
		</>
	);
}

export default Homepage;
