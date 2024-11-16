import React from 'react'

export enum Tag {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	P = 'p',
}

interface TextProps {
	children: string | React.ReactNode
	tag?: Tag
}

const Text: React.FC<TextProps> = ({ tag: Tag = 'p', children }) => {
	return (
		<>
			{React.createElement(
				Tag,
				{
					className: {
						h1: 'text-4xl font-bold',
						h2: 'text-2xl font-bold',
						h3: 'text-lg font-bold',
						p: 'text-md',
					}[Tag],
				},
				[children]
			)}
		</>
	)
}

export default Text
