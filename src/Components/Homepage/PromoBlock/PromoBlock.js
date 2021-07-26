import Container from '../../Default/Container';
import Slider from './Slider';

const PromoBlock = () => {
	return (
		<>
			<div className='promo-block'>
				<Container>
					<div className='promo-block__row'>
						<div className='promo-block-top'>
							<h2 className='promo-block-top__title'>Акции, скидки</h2>

							<div className='promo-block-top__pagination-block'>
								<button className='promo-block-top__btn-prev'>
									<svg className='pagination__icon-prev' width='40' height='40'>
										<use href='icons.svg#prev'></use>
									</svg>
								</button>

								<button className='promo-block-top__btn-next'>
									<svg className='pagination__icon-next' width='40' height='40'>
										<use href='icons.svg#next'></use>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<Slider />
		</>
	);
};

export default PromoBlock;
