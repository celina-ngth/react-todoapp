import React from 'react'
import Text, { Tag } from './ui/Text'
import InputCheckbox from './ui/InputCheckbox'
import Form from './ui/Form'
import Button, { Variant } from './ui/Button'
import useTodos from '../hooks/useTodos'
import InputSearch from './ui/InputSearch'

const Todos: React.FC = () => {
	const { todos, text, addTodo, removeTodo, toggleComplete, setText } =
		useTodos()

	const handleSubmit = (event: React.FormEvent<Element>) => {
		event.preventDefault()
		addTodo(text)
	}

	return (
		<div className="border-neutral border p-6 rounded-xl flex flex-col gap-4 relative">
			<Text tag={Tag.H3}>Todos</Text>

			<hr />

			<Form id="todo-form" onSubmit={handleSubmit}>
				<InputSearch
					id="todo-input"
					placeholder="Ajouter une todo..."
					value={text}
					onChange={setText}
				/>
			</Form>

			{todos.map((todo) => (
				<div className="flex justify-between" key={todo.id}>
					<InputCheckbox
						id={todo.id.toString()}
						name={todo.id.toString()}
						value={todo.text}
						checked={todo.complete}
						onChange={() => toggleComplete(todo)}
					/>
					<Button variant={Variant.ERROR} onClick={() => removeTodo(todo.id)}>
						×
					</Button>
				</div>
			))}
		</div>
	)
}

export default Todos
