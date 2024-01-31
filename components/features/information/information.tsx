import { Box } from '../../ui/Box'
import { Typography } from '../../ui/Typography'

const Information = () => {
	return (
		<Box className='flex flex-col gap-6 mb-[119px]'>
			<Typography color='text-white' size='text-[40px]' weight='font-bold'>
				Информация
			</Typography>
			<Box className='flex gap-[100px]'>
				<Box className='flex flex-col gap-[25px]'>
					<Box className='flex flex-col gap-4'>
						<Typography color='text-[#4B4B4B]' size='text-[28px]'>
							Премьера в мире
						</Typography>
						<Typography color='text-white' size='text-[28px]'>
							31 октября 2022
						</Typography>
					</Box>
					<Box className='flex flex-col gap-4'>
						<Typography color='text-[#4B4B4B]' size='text-[28px]'>
							Оригинальное название
						</Typography>
						<Typography color='text-white' size='text-[28px]'>
							Wednesday
						</Typography>
					</Box>
				</Box>
				<Box className='flex flex-col gap-[25px]'>
					<Box className='flex flex-col gap-4'>
						<Typography color='text-[#4B4B4B]' size='text-[28px]'>
							Страна
						</Typography>
						<Typography color='text-white' size='text-[28px]'>
							США
						</Typography>
					</Box>
					<Box className='flex flex-col gap-4'>
						<Typography color='text-[#4B4B4B]' size='text-[28px]'>
							Жанры
						</Typography>
						<Box className='flex gap-2.5'>
							<Typography color='text-white' size='text-[28px]'>
								Фентези,
							</Typography>
							<Typography color='text-white' size='text-[28px]'>
								Комедия,
							</Typography>
							<Typography color='text-white' size='text-[28px]'>
								Криминал,
							</Typography>
							<Typography color='text-white' size='text-[28px]'>
								Детектив,
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box className='flex flex-col gap-[25px]'>
					<Box className='flex flex-col gap-4'>
						<Typography color='text-[#4B4B4B]' size='text-[28px]'>
							Язык аудиодорожки
						</Typography>
						<Typography color='text-white' size='text-[28px]'>
							Rus, Eng
						</Typography>
					</Box>
					<Box className='flex flex-col gap-4'>
						<Typography color='text-[#4B4B4B]' size='text-[28px]'>
							Качество
						</Typography>
						<Typography color='text-white' size='text-[28px]'>
							Full HD
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Information
