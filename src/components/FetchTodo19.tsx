import { use } from 'react'

async function fetchTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return res.json()
}
const FetchTodo19 = () => {
  const data = use(fetchTodo())
  return (
    <div>
      {data.title}
    </div>
  )
}
export default FetchTodo19