import Box from '../../ui/Box/Box'
import { Typography } from '../../ui/Typography'
import SwiperSlider from '../../ui/Swiper/Swiper'
import Image, { StaticImageData } from 'next/image'
import card1 from '../../assets/tv-card/1.png'
import card2 from '../../assets/tv-card/2.png'
import card3 from '../../assets/tv-card/3.png'
import card4 from '../../assets/tv-card/4.jpeg'
import { useRouter } from 'next/navigation'

const tvCardData = [
	{
		id: 1,
		title: 'Синий жук',
		image: card1,
		rating: '10'
	},
	{
		id: 2,
		title: 'Домашняя игра',
		image: card2,
		rating: '6.9'
	},
	{
		id: 3,
		title: 'Салют 7',
		image: card3,
		rating: '5.7'
	},
	{
		id: 4,
		title: 'Поймай меня, если сможешь',
		image: card4,
		rating: '7.0'
	}
]

const RenderCard = (item: {
	title: string
	image: StaticImageData
	rating: string
}) => {
	const route = useRouter()
	return (
		<Box
			className='flex flex-col gap-5 relative cursor-pointer'
			onClick={() => route.push(`/serial`)}
		>
			<Image
				src={item.image}
				className='max-w-[398px] border-[4px] hover:ease-in p-1 hover:delay-100 hover:duration-200 border-[#09090C] hover:border-[#5712B1] max-h-[597px] rounded-[28px]'
				alt='image'
				width={398}
				height={597}
			/>
			<Box className='py-3.5 px-[22px] w-[75px] h-[48px] top-[28px] left-[28px] bg-gradient-accent absolute text-[28px] font-medium rounded-[12px] text-white flex justify-center items-center'>
				{item.rating}
			</Box>
			<Typography color='text-white' size='text-[28px]' weight='font-medium'>
				{item.title}
			</Typography>
		</Box>
	)
}

const TvCard = () => {
	return (
		<Box className='flex flex-col gap-6 mt-[96px]'>
			<Typography color='text-white' size='text-[40px]' weight='font-bold'>
				Новинки
			</Typography>
			<SwiperSlider
				items={tvCardData}
				render={item => <RenderCard {...item} />}
				slidesPerView={3.9}
			/>
		</Box>
	)
}

export default TvCard
