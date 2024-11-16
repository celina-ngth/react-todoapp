import React from 'react'

interface InputProps {
	placeholder: string
	value?: string
	onChange?: (value: string) => void
	onClick?: () => void
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
	return (
		<div>
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				className="border border-spacing-4 py-2 w-full border-neutral rounded-full px-4"
			/>
		</div>
	)
}

export default Input
