import React from 'react'

interface InputProps {
	placeholder: string
	value?: string
	className?: string
	onChange?: (value: string) => void
	onClick?: () => void
}

const Input: React.FC<InputProps> = ({
	placeholder,
	value,
	className,
	onChange,
}) => {
	return (
		<>
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				className={className}
			/>
		</>
	)
}

export default Input
