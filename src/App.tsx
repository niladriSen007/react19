import { Suspense } from "react"
import FetchTodo from "./components/FetchTodo"

const App = () => {
  return (
    <Suspense >
      <div className="bg-black text-white h-screen text-3xl">
        <FetchTodo />
      </div>
    </Suspense>
  )
}
export default App