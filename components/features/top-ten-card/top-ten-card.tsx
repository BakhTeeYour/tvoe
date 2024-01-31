import {Box} from '../../ui/Box'
import Image, {StaticImageData} from 'next/image'
import card1 from '../../assets/rating-card/1.png'
import card2 from '../../assets/rating-card/2.png'
import card3 from '../../assets/rating-card/3.jpeg'
import SwiperSlider from '../../ui/Swiper/Swiper'

const items = [
    {
        id: 1,
        image: card1,
        rating: 1
    },
    {
        id: 2,
        image: card2,
        rating: 2
    },
    {
        id: 3,
        image: card3,
        rating: 3
    }
]

type Props = {
	image: StaticImageData;
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
                    items={items}
                    render={item => <RatingCard {...item} />}
                    slidesPerView={2.8}
                />
            </Box>
        </Box>
    )
}
export default TopTenCard
