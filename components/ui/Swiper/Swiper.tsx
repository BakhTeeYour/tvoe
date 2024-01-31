import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './swiperSlider.css'
import { Fragment } from 'react'

type Props<T> = {
	items: T[]
	render: (items: T) => JSX.Element
	slidesPerView: number
}

const SwiperSlider = <T,>({ items, slidesPerView, render }: Props<T>) => {
	return (
		<Swiper slidesPerView={slidesPerView} className='mySwiper'>
			{items.map(item => (
				<Fragment key={Math.random() + Date.now()}>
					<SwiperSlide>{render(item)}</SwiperSlide>
				</Fragment>
			))}
		</Swiper>
	)
}

export default SwiperSlider
