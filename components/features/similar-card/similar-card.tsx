import { Box } from '../../ui/Box'
import { Typography } from '../../ui/Typography'
import Image, { StaticImageData } from 'next/image'
import SwiperSlider from '../../ui/Swiper/Swiper'
import { similar } from '../../../constants'

type Props = {
	id: number
	image: StaticImageData
	rating: number
}

const RenderCard = (item: Props) => {
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
