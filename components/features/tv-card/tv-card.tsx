import { Box } from '../../ui/Box'
import { Typography } from '../../ui/Typography'
import SwiperSlider from '../../ui/Swiper/Swiper'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { tvCardData } from '../../../constants'

type Props = {
	title: string
	image: StaticImageData
	rating: string
}

const RenderCard = (item: Props) => {
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
