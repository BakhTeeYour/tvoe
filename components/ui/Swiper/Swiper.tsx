import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

type Props<T> = {
	items: T[]
	render: (items: T) => JSX.Element
	slidesPerView: number
}

const SwiperSlider = <T,>({ items, slidesPerView, render }: Props<T>) => {
	return (
		<Swiper slidesPerView={slidesPerView} className='mySwiper'>
			{items.map(item => (
				<SwiperSlide>{render(item)}</SwiperSlide>
			))}
		</Swiper>
	)
}

export default SwiperSlider
