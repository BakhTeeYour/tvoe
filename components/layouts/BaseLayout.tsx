import Box from '../ui/Box/Box'
import Icon from '../Icon/Icon'
import { FC, ReactNode, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Typography } from '../ui/Typography'

type Props = {
	children: ReactNode
}

const handleScroll = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}
export const BaseLayout: FC<Props> = ({ children }) => {
	const route = useRouter()
	const [open, setOpen] = useState(false)
	return (
		<Box className='flex gap-3 mt-10 relative z-10'>
			<Box className='flex flex-col items-center w-[144px] h-screen fixed'>
				<Icon name='logo' size='default' onClick={() => route.push('/')} />
				<Box
					className='flex flex-col mt-[110px]'
					onMouseEnter={() => setOpen(true)}
					onMouseLeave={() => setOpen(false)}
				>
					<Box className='flex flex-col gap-7'>
						<Box className='flex items-center gap-x-2.5 cursor-pointer relative'>
							<Icon name='search' size='default' />
							{open && (
								<Typography
									color='text-[#BABABA]'
									className='absolute left-[54px]'
									size='text-[20px]'
								>
									Поиск
								</Typography>
							)}
						</Box>
						<Box
							className='flex items-center gap-x-2.5 cursor-pointer relative'
							onClick={() => route.push('/')}
						>
							<Icon name='home' size='default' />
							{open && (
								<Typography
									color='text-[#BABABA]'
									className='absolute left-[54px]'
									size='text-[20px]'
								>
									Главная
								</Typography>
							)}
						</Box>
						<Box className='flex items-center gap-x-2.5 cursor-pointer relative'>
							<Icon name='movie' size='default' />
							{open && (
								<Typography
									color='text-[#BABABA]'
									className='absolute left-[54px]'
									size='text-[20px]'
								>
									Каталог
								</Typography>
							)}
						</Box>
						<Box className='flex items-center gap-x-2.5 cursor-pointer relative'>
							<Icon name='tv' size='default' />
							{open && (
								<Typography
									color='text-[#BABABA]'
									className='absolute left-[54px]'
									noWrap={true}
									size='text-[20px]'
								>
									ТВ каналы
								</Typography>
							)}
						</Box>
						<Box className='flex items-center gap-x-2.5 cursor-pointer relative'>
							<Icon name='favorite' size='default' />
							{open && (
								<Typography
									color='text-[#BABABA]'
									className='absolute left-[54px]'
									size='text-[20px]'
								>
									Моё
								</Typography>
							)}
						</Box>
						<Box className='flex items-center gap-x-2.5 cursor-pointer relative'>
							<Icon name='home' size='default' />
							{open && (
								<Typography
									color='text-[#BABABA]'
									className='absolute left-[54px]'
									size='text-[20px]'
								>
									Аккаунт
								</Typography>
							)}
						</Box>
					</Box>
					<Box className='mt-[290px]'>
						<Icon name='arrow-up' onClick={handleScroll} size='default' />
					</Box>
				</Box>
			</Box>
			{children}
		</Box>
	)
}
