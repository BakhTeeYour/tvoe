import Box from '../../ui/Box/Box'
import { Typography } from '../../ui/Typography'
import Icon from '../../Icon/Icon'

const SeriesDescription = () => {
	return (
		<Box className='flex flex-col gap-6'>
			<Typography color='text-white' size='text-[40px]' weight='font-bold'>
				Описание
			</Typography>
			<Typography color='text-white' size='text-[30px]'>
				Детективная история, наполненная сверхъестественными силами. Главная
				героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и
				единственная дочь Гомеса и Мортиши Аддамсов, которая становится
				студенткой академии «Невермор». Она пытается овладеть своими
				проявившимися экстрасенсорными способностями, помешать чудовищным
				убийствам монстра, что терроризирует местный городок Джерико, а также
				разгадать тайну, в которую были втянуты её родители 32 года назад, — и
				всё это на фоне её новых и очень запутанных отношений в академии.
			</Typography>
			<Box className='flex gap-5'>
				<Icon name='attention' size='medium' />
				<Typography color='text-[#4B4B4B]' size='text-[28px]'>
					Контент может содержать сцены курения и употребления спиртных
					напитков. Курение и чрезмерное употребление алкоголя вредит вашему
					здоровью.
				</Typography>
			</Box>
		</Box>
	)
}
export default SeriesDescription
