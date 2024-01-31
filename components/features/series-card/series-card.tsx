import { Typography } from '../../ui/Typography'
import card1 from '../../assets/series-card/1.png'
import card2 from '../../assets/series-card/2.jpeg'
import card3 from '../../assets/series-card/3.jpeg'
import card4 from '../../assets/series-card/4.jpeg'
import Image, { StaticImageData } from 'next/image'
import SwiperSlider from '../../ui/Swiper/Swiper'
import {Box} from "../../ui/Box";

const series = [
	{
		id: 1,
		duration: '43 минуты',
		series: '1 серия',
		image: card1
	},
	{
		id: 2,
		duration: '41 минуту',
		series: '2 серия',
		image: card2
	},
	{
		id: 3,
		duration: '38 минут',
		series: '3 серия',
		image: card3
	},
	{
		id: 4,
		duration: '42 минуты',
		series: '4 серия',
		image: card4
	}
]

const RenderCard = (item: {
	series: string
	duration: string
	image: StaticImageData
}) => {
	return (
		<Box className='flex flex-col gap-5'>
			<Image
				src={item.image}
				alt='image'
				width={544}
				height={306}
				className='rounded-[20px] w-[544px] h-[306px]'
			/>
			<Box className='flex flex-col gap-3 mt-3'>
				<Typography color='text-white' size='text-[28px]' weight='font-medium'>
					{item.series}
				</Typography>
				<Typography color='text-[#BABABA]' size='text-[24px]'>
					{item.duration}
				</Typography>
			</Box>
		</Box>
	)
}

const SeriesCard = () => {
	return (
		<Box className='flex flex-col gap-6'>
			<Box className='flex gap-11 items-center'>
				<Typography color='text-white' size='text-[40px]' weight='font-bold'>
					Сезоны
				</Typography>
				<Box className='flex items-center gap-5 text-[24px] font-medium'>
					<span className='rounded-full w-10 h-10 flex items-center justify-center text-[#09090C] bg-white cursor-pointer'>
						1
					</span>
					<span className='rounded-full w-10 h-10 flex items-center justify-center text-[#BABABA] bg-[#232326] cursor-pointer'>
						2
					</span>
					<span className='rounded-full w-10 h-10 flex items-center justify-center text-[#BABABA] bg-[#232326] cursor-pointer'>
						3
					</span>
				</Box>
			</Box>
			<SwiperSlider
				items={series}
				render={item => <RenderCard {...item} />}
				slidesPerView={3.1}
			/>
		</Box>
	)
}

export default SeriesCard
