import { IconsName } from '../theme/icons'
import { FC } from 'react'
import classNames from 'classnames'
import LogoIcon from './icons/logo'
import ArrowUpIcon from './icons/arrow-up'
import HumanIcon from './icons/human'
import FavoriteIcon from './icons/favorite'
import TvIcon from './icons/tv'
import MovieIcon from './icons/movie'
import HomeIcon from './icons/home'
import Search from './icons/search'
import WednesdayIcon from './icons/wednesday'
import FavIcon from './icons/fav'
import AttentionIcon from './icons/attention'

type Props = {
	name: IconsName
	color?: string
	hasIndent?: boolean
	onClick?: () => void
	isCenter?: boolean
	size: 'medium' | 'default'
}

const svg: Record<IconsName, any> = {
	logo: LogoIcon,
	'arrow-up': ArrowUpIcon,
	human: HumanIcon,
	favorite: FavoriteIcon,
	tv: TvIcon,
	movie: MovieIcon,
	home: HomeIcon,
	search: Search,
	wednesday: WednesdayIcon,
	fav: FavIcon,
	attention: AttentionIcon
}

const iconsSize = {
	medium: 'w-[32px] h-[32px]',
	default: ''
}
const Icon: FC<Props> = ({
	name,
	color,
	hasIndent,
	onClick,
	isCenter = true,
	size = 'default'
}) => {
	const SvgIcon = svg[name]
	const iconSize = iconsSize[size] ?? size
	const iconClasses = classNames(
		'flex',
		isCenter && 'items-center justify-center',
		color ? color : '',
		onClick ? 'cursor-pointer' : '',
		hasIndent ? 'p-[6px]' : '',
		iconSize
	)

	return (
		<div className={iconClasses} onClick={onClick}>
			<SvgIcon />
		</div>
	)
}

export default Icon
