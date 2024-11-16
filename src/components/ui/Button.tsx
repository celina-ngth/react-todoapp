import React, { ButtonHTMLAttributes } from 'react'

export enum Variant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	NEUTRAL = 'neutral',
	INFO = 'info',
	ERROR = 'error',
}

interface ButtonProps {
	children: string
	variant?: Variant
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
	type,
	variant,
	children,
	onClick,
}) => {
	return (
		<>
			<button
				type={type}
				onClick={onClick}
				className={
					'py-2 px-6 rounded-full text-base hover:bg-opacity-80 font-semibold ' +
					(variant === Variant.PRIMARY ? ' bg-primary text-secondary' : '') +
					(variant === Variant.SECONDARY
						? ' bg-secondary border border-1 border-neutral'
						: '') +
					(variant === Variant.NEUTRAL ? ' bg-neutral text-secondary' : '') +
					(variant === Variant.INFO ? ' bg-info text-secondary' : '') +
					(variant === Variant.ERROR ? ' bg-error text-secondary' : '')
				}
			>
				{children}
			</button>
		</>
	)
}

export default Button
