'use client'
import { BaseLayout } from '../../components/layouts/BaseLayout'
import {Box} from '../../components/ui/Box'
import Image from 'next/image'
import Icon from '../../components/Icon/Icon'
import { Typography } from '../../components/ui/Typography'
import { Button } from '../../components/ui/Button'
import {Information, SeriesCard, SimilarCard, SeriesDescription} from "../../components/features";

const Serial = () => {
	return (
		<BaseLayout>
			<Box className='w-full'>
				<Box className='flex flex-col ml-[144px] gap-[112px]'>
					<Image
						className='absolute z-[-1] -top-10 -right-10'
						src='/serial.png'
						alt=''
						height={780}
						width={1400}
					/>
					<Box className='max-w-[735px] flex flex-col gap-8'>
						<Icon name='wednesday' size='default' isCenter={false} />
						<Box className='flex flex-col gap-5'>
							<Box className='flex items-center gap-x-8'>
								<Box className='py-3.5 px-[22px] w-[75px] h-[48px] text-[28px] bg-[#FFFFFF33] font-medium rounded-[12px] text-white flex justify-center items-center'>
									10
								</Box>
								<Typography
									color='text-white'
									size='text-[28px]'
									weight='font-normal'
								>
									2022 - ...
								</Typography>
								<Typography
									color='text-white'
									size='text-[28px]'
									weight='font-normal'
								>
									1 сезон
								</Typography>
								<Typography
									color='text-white'
									size='text-[28px]'
									weight='font-normal'
								>
									США
								</Typography>
								<Typography
									color='text-white'
									size='text-[28px]'
									weight='font-normal'
								>
									Ужасы
								</Typography>
								<Typography
									color='text-white'
									size='text-[28px]'
									weight='font-normal'
								>
									0+
								</Typography>
							</Box>
							<Typography
								color='text-white'
								size='text-[28px]'
								weight='font-normal'
							>
								Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы
								остановить местного серийного убийцу и раскрыть тайну родителей.
							</Typography>
						</Box>
					</Box>
					<Box className='flex gap-4'>
						<Button size='medium' color='primary'>
							Смотреть
						</Button>
						<Button size='medium' color='secondary'>
							Трейлер
						</Button>
						<Button size='medium' color='secondary' icon='fav'></Button>
						<Button size='medium' color='secondary' icon='favorite'></Button>
					</Box>
					<Box className='flex flex-col gap-[60px]'>
						<SeriesCard />
						<SeriesDescription />
						<SimilarCard />
						<Information />
					</Box>
				</Box>
			</Box>
		</BaseLayout>
	)
}

export default Serial
