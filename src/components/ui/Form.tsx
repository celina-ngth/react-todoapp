import React from 'react'

interface FormProps {
	id: string
	className?: string
	children: React.ReactNode
	onSubmit?: (event: React.FormEvent) => void
}

const Form: React.FC<FormProps> = ({ id, className, children, onSubmit }) => {
	return (
		<>
			<form id={id} className={className} onSubmit={onSubmit}>
				{children}
			</form>
		</>
	)
}

export default Form
