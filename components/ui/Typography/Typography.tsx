import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
	size?: string
	color: string
	weight?: string
	uppercase?: boolean
	noWrap?: boolean
	isCenter?: boolean
	maxLines?: number
	capitalize?: boolean
	className?: string
}>

export const Typography: FC<Props> = ({
	size = 'text-sm',
	color,
	weight = 'text-normal',
	children,
	uppercase,
	noWrap,
	isCenter,
	maxLines,
	capitalize,
	className
}) => {
	const typographyClasses = classNames(
		size,
		color,
		weight,
		{
			uppercase
		},
		noWrap ? 'whitespace-nowrap' : '',
		isCenter ? 'text-center' : '',
		maxLines ? [`h-[40px]`, `overflow-hidden`] : [],
		'letter-spacing-[0.5px]',
		capitalize ? 'capitalize' : '',
		className,
		'transition-all'
	)

	return <div className={typographyClasses}>{children}</div>
}
