'use client'
import { BaseLayout } from '../components/layouts/BaseLayout'
import {Box} from '../components/ui/Box'
import Image from 'next/image'
import { Button } from '../components/ui/Button'
import TvCard from '../components/features/tv-card/tv-card'
import TopTenCard from '../components/features/top-ten-card/top-ten-card'

export default function Home() {
	return (
		<BaseLayout>
			<Box className='w-full ml-[215px]'>
				<Box className='flex flex-col items-center mr-[220px]'>
					<Image
						className='absolute z-[-1] -top-9 -right-10'
						src='/image.png'
						alt=''
						height={800}
						width={1250}
					/>
					<Box className='mt-[264px]'>
						<Box className='max-w-[886px] flex flex-col items-center gap-9 '>
							<Image
								className=''
								src='/title.png'
								alt=''
								width={576}
								height={228}
							/>

							<span className='text-white leading-normal text-center font-medium text-[36px]'>
								Неувядающий авантюрист и пытливый археолог-исследователь
								по‑прежнему в седле.
							</span>
							<Box className='flex justify-center gap-6'>
								<Button size='medium' color='primary'>
									Смотреть
								</Button>
								<Button size='medium' color='secondary'>
									О фильме
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<TvCard />
				<TopTenCard />
			</Box>
		</BaseLayout>
	)
}
