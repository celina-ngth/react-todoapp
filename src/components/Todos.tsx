import React from 'react'
import Text, { Tag } from './ui/Text'
import Input from './ui/Input'
import Form from './ui/Form'
import Button, { Variant } from './ui/Button'

const Todos: React.FC = () => {
	const [text, setText] = React.useState('')
	const [todos, setTodos] = React.useState([
		{
			id: 1,
			text: 'Run a semi-marathon',
		},
		{
			id: 2,
			text: 'Learn React',
		},
	])

	function addTodo(text: string) {
		const newTodo = {
			id: Date.now(),
			text,
		}
		setTodos([...todos, newTodo])
		setText('')
	}

	return (
		<div className="border-neutral border p-4 rounded-xl flex flex-col gap-4 relative">
			<Text tag={Tag.H3}>Todos</Text>
			<hr />

			<Form
				id="todo-form"
				className="relative flex z-50 bg-white rounded-full border border-neutral border-1 items-center px-2"
				onSubmit={(event) => {
					event.preventDefault()
					addTodo(text)
				}}
			>
				<Input
					placeholder="Ajouter une todo..."
					value={text}
					onChange={setText}
					className="rounded-full flex-1 p-4 focus:outline-none"
				/>
				<Button type="submit" variant={Variant.INFO}>
					+
				</Button>
			</Form>

			{todos.map((todo) => (
				<Text key={todo.id}>{todo.text}</Text>
			))}
		</div>
	)
}

export default Todos
