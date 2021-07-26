// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const Slider = () => {
	return (
		<Swiper
			slidesPerView={'auto'}
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
				},
			}}
			navigation={{
				nextEl: '.promo-block-top__btn-next',
				prevEl: '.promo-block-top__btn-prev',
			}}
		>
			<SwiperSlide className='promo-block-slider__item green'>
				<h3 className='promo-block-slider__item-title'>
					5 ДОСТАВОК
					<br />
					БЕСПЛАТНО
				</h3>
				<img
					className='promo-block-slider__item-img'
					src='promo-img-1.png'
					alt='овощи'
					srcSet=''
				/>
				<span className='promo-block-slider__item-value promo-code'>4F5B</span>
			</SwiperSlide>

			<SwiperSlide className='promo-block-slider__item red'>
				<h3 className='promo-block-slider__item-title'>
					СКИДКА
					<br />
					на любые ягоды
				</h3>
				<img
					className='promo-block-slider__item-img'
					src='promo-img-2.png'
					alt='ягоды'
					srcSet=''
				/>
				<span className='promo-block-slider__item-value'>20%</span>
			</SwiperSlide>

			<SwiperSlide className='promo-block-slider__item yellow'>
				<h3 className='promo-block-slider__item-title'>
					СКИДКА
					<br />
					на любой мёд
				</h3>
				<img
					className='promo-block-slider__item-img'
					src='promo-img-3.png'
					alt='банка с медом'
					srcSet=''
				/>
				<span className='promo-block-slider__item-value'>50%</span>
			</SwiperSlide>

			<SwiperSlide className='promo-block-slider__item blue'>
				<h3 className='promo-block-slider__item-title'>
					СКИДКА
					<br />
					на молочные продукты
				</h3>
				<img
					className='promo-block-slider__item-img'
					src='promo-img-4.png'
					alt='бутылка молока'
					srcSet=''
				/>
				<span className='promo-block-slider__item-value'>10%</span>
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
