import { Box } from '../../ui/Box'
import Image, { StaticImageData } from 'next/image'
import SwiperSlider from '../../ui/Swiper/Swiper'
import { topTen } from '../../../constants'

type Props = {
	image: StaticImageData
	rating: number
}

const style = {
	color: '#09090C',
	textShadow:
		'-2px -2px 0 #6a11cb, 2px -2px 0 #2575fc, -2px 2px 0 #2575fc, 2px 2px 0 #2575fc'
}

const RatingCard = (item: Props) => {
	return (
		<Box className='w-[559px] mt-[33.5px] flex gap-[-80px]'>
			<Box
				className='text-[360px] relative overflow-hidden cursor-pointer font-black italic'
				style={style}
			>
				{item.rating}
			</Box>
			<Image
				className='z-10 relative max-w-[398px] max-h-[597px] rounded-[20px]'
				src={item.image}
				alt='image'
				width={398}
				height={597}
			/>
		</Box>
	)
}
const TopTenCard = () => {
	return (
		<Box className='mt-[110px] mb-[203px]'>
			<Box className='flex gap-5 items-center'>
				<div className='text-[52px] font-black italic' style={style}>
					ТОП-10
				</div>
				<div className='text-[40px] font-bold'>просмотров за неделю</div>
			</Box>
			<Box className='flex gap-[100px]'>
				<SwiperSlider
					items={topTen}
					render={item => <RatingCard {...item} />}
					slidesPerView={2.8}
				/>
			</Box>
		</Box>
	)
}
export default TopTenCard
