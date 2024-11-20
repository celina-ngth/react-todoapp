import React from 'react'
import Button, { Variant } from './Button'

interface InputProps {
	id: string
	placeholder?: string
	value?: string
	onChange?: (value: string) => void
	onClick?: () => void
}

const Input: React.FC<InputProps> = ({ id, placeholder, value, onChange }) => {
	return (
		<div className="relative flex z-50 bg-white rounded-full border border-neutral border-1 items-center px-3 my-2">
			<input
				id={id}
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				className="rounded-full flex-1 py-4 px-2 border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
			/>

			<Button type="submit" variant={Variant.INFO}>
				Ajouter
			</Button>
		</div>
	)
}

export default Input
