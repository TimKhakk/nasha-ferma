import Container from '../../Default/Container';

// import Swiper core and required modules
import SwiperCore, { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([ Navigation, A11y]);


const PromoBlock = () => {
  return(
    <>
      <div className="promo-block">
				<Container>
					<div className="promo-block__row">

						<div className="promo-block-top">
							<h2 className="promo-block-top__title">Акции, скидки</h2>

							<div className="promo-block-top__pagination-block">

								<button className="promo-block-top__btn-prev">
									<svg className="pagination__icon-prev" width="40" height="40">
										<use href="icons.svg#prev"></use>
									</svg>
								</button>

								<button className="promo-block-top__btn-next">
									<svg className="pagination__icon-next" width="40" height="40">
										<use href="icons.svg#next"></use>
									</svg>
								</button>

							</div>
						</div>
					</div>
				</Container>

			</div>
			<Swiper
				slidesPerView={"auto"}
				grabCursor={true}
				loop={true}
				spaceBetween={16}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					// when window width is >= 1400px
					1400: {
						spaceBetween: 36,
					}
				}}
				navigation={{
					nextEl: '.promo-block-top__btn-next',
					prevEl: '.promo-block-top__btn-prev',
				}}
			>
				<SwiperSlide className="promo-block-slider__item green">
					<h3 className="promo-block-slider__item-title">5 ДОСТАВОК<br/>БЕСПЛАТНО</h3>
					<img className="promo-block-slider__item-img" src="promo-img-1.png" alt="овощи" srcset="" />
					<span className="promo-block-slider__item-value promo-code">4F5B</span>
				</SwiperSlide>

				<SwiperSlide className="promo-block-slider__item red">
					<h3 className="promo-block-slider__item-title">СКИДКА<br/>на любые ягоды</h3>
					<img className="promo-block-slider__item-img" src="promo-img-2.png" alt="ягоды" srcset="" />
					<span className="promo-block-slider__item-value">20%</span>
				</SwiperSlide>

				<SwiperSlide className="promo-block-slider__item yellow">
					<h3 className="promo-block-slider__item-title">СКИДКА<br/>на любой мёд</h3>
					<img className="promo-block-slider__item-img" src="promo-img-3.png" alt="банка с медом" srcset="" />
					<span className="promo-block-slider__item-value">50%</span>
				</SwiperSlide>

				<SwiperSlide className="promo-block-slider__item blue">
					<h3 className="promo-block-slider__item-title">СКИДКА<br/>на молочные продукты</h3>
					<img className="promo-block-slider__item-img" src="promo-img-4.png" alt="бутылка молока" srcset="" />
					<span className="promo-block-slider__item-value">10%</span>
				</SwiperSlide>

			</Swiper>
    </>
  )
};

export default PromoBlock;
