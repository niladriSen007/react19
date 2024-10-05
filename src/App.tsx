import { Suspense } from "react"
import { Theme } from "./components/Theme"

const App = () => {
  return (
    <Suspense>
      <Theme />
    </Suspense>
  )
}
export default App