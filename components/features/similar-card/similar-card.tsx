import {Box} from '../../ui/Box'
import { Typography } from '../../ui/Typography'
import card1 from '../../assets/similar-card/1.jpeg'
import card2 from '../../assets/similar-card/2.jpeg'
import card3 from '../../assets/similar-card/3.jpeg'
import card4 from '../../assets/similar-card/4.png'
import card5 from '../../assets/similar-card/5.jpeg'
import card6 from '../../assets/similar-card/6.png'
import card7 from '../../assets/similar-card/7.png'
import Image, { StaticImageData } from 'next/image'
import SwiperSlider from '../../ui/Swiper/Swiper'

const similar = [
	{
		id: 1,
		image: card1,
		rating: 9.1
	},
	{
		id: 2,
		image: card2,
		rating: 9.1
	},
	{
		id: 3,
		image: card3,
		rating: 9.1
	},
	{
		id: 4,
		image: card4,
		rating: 9.1
	},
	{
		id: 5,
		image: card5,
		rating: 9.1
	},
	{
		id: 6,
		image: card6,
		rating: 9.1
	},
	{
		id: 7,
		image: card7,
		rating: 9.1
	}
]

const RenderCard = (item: {
	id: number
	image: StaticImageData
	rating: number
}) => {
	return (
		<Box>
			<Image
				src={item.image}
				alt='image'
				width={255}
				height={382}
				className='w-[255px] h-[382px] cursor-pointer border-[4px] hover:ease-in p-1 hover:delay-100 hover:duration-200 border-[#09090C] hover:border-[#5712B1] rounded-[12px]'
			/>
			<Box className='py-3 px-3 w-[59px] h-[41px] top-[12px] left-[12px] bg-gradient-accent absolute text-[28px] font-medium rounded-[12px] text-white flex justify-center items-center'>
				{item.rating}
			</Box>
		</Box>
	)
}

const SimilarCard = () => {
	return (
		<Box className='flex flex-col gap-6'>
			<Typography color='text-white' size='text-[40px]' weight='font-bold'>
				Похожее
			</Typography>
			<SwiperSlider
				items={similar}
				render={item => <RenderCard {...item} />}
				slidesPerView={6.2}
			/>
		</Box>
	)
}

export default SimilarCard
