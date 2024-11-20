import { useState } from 'react'

interface Todo {
	id: number
	text: string
	complete: boolean
}

const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [text, setText] = useState('')

	const addTodo = (text: string) => {
		const newTodo = {
			id: Date.now(),
			text,
			complete: false,
		}
		setTodos([newTodo, ...todos])
		setText('')
	}

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	const toggleComplete = (completedTodo: Todo) => {
		setTodos(
			todos
				.map((todo) =>
					todo.id === completedTodo.id
						? { ...todo, complete: !todo.complete }
						: todo
				)
				.sort((a, b) => Number(a.complete) - Number(b.complete))
		)
	}

	return { todos, text, addTodo, removeTodo, toggleComplete, setText }
}

export default useTodos
