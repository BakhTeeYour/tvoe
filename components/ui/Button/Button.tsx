import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { IconsName } from '../../theme/icons'
import Icon from '../../Icon/Icon'

type Props = PropsWithChildren<{
	size: 'medium'
	color: 'primary' | 'secondary'
	leftIcon?: IconsName
	rightIcon?: IconsName
	disabled?: boolean
	icon?: IconsName
	htmlType?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	isCenter?: boolean
	className?: string
}>

const buttonSizes = {
	medium: 'py-[24px] px-[32px]'
}

const iconOnlyButtonSizes = {
	medium: 'p-[32px]'
}

const buttonColors = {
	primary: 'text-white',
	secondary: 'text-white '
}

export const Button: FC<Props> = ({
	children,
	size,
	color,
	leftIcon,
	rightIcon,
	disabled,
	icon,
	htmlType = 'button',
	onClick,
	isCenter = false,
	className
}) => {
	const buttonSize = icon ? iconOnlyButtonSizes[size] : buttonSizes[size]
	const buttonColor = buttonColors[color]
	const buttonClasses = classNames(
		'inline-flex',
		'gap-x-[8px]',
		'text-[30px]',
		'font-medium',
		'rounded-[16px]',
		'items-center',
		'justify-between',
		className,
		buttonSize,
		buttonColor,
		{
			'justify-center': isCenter
		},
		'transition-all'
	)

	const content = (
		<>
			{leftIcon && <Icon name={leftIcon} size={size} />}
			<span className='whitespace-nowrap'>
				{icon ? <Icon name={icon} size={size} /> : children}
			</span>
			{rightIcon && <Icon name={rightIcon} size={size} />}
		</>
	)

	const style =
		color === 'primary'
			? {
					background:
						'var(--Gradient-Accent, linear-gradient(90deg, #6A11CB 0%, #2575FC 100%))'
				}
			: {
					background:
						'var(--gradient-white-50, linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.10) 100%))',
					backdropFilter: 'blur(10px)'
				}

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			style={style}
			className={buttonClasses}
			type={htmlType}
		>
			{content}
		</button>
	)
}
