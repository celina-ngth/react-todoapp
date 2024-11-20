import React from 'react'
import Text from './Text'

interface InputProps {
	id: string
	name?: string
	value?: string
	checked?: boolean
	onChange?: (value: string) => void
}

const InputCheckbox: React.FC<InputProps> = ({
	id,
	name,
	checked,
	value,
	onChange,
}) => {
	return (
		<div className="flex items-baseline gap-2 w-full">
			<input
				id={id}
				name={name}
				type="checkbox"
				value={value}
				checked={checked}
				onChange={(e) => onChange?.(e.target.value)}
			/>

			<label htmlFor={id} className={checked ? 'line-through' : ''}>
				<Text>{value}</Text>
			</label>
		</div>
	)
}

export default InputCheckbox
