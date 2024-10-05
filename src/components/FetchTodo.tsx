import { useEffect, useState } from "react";

interface FetchTodoProps {
  title: string;
}

const FetchTodo = () => {

  const [todo, setTodo] = useState<FetchTodoProps | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function fetchTodo() {
      setLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (!res.ok) {
          throw new Error('Failed to fetch')
        }
        const todo: FetchTodoProps = await res.json()
        setTodo(todo)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchTodo()
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {todo && <p>{todo.title}</p>}
    </div>
  )
}
export default FetchTodo