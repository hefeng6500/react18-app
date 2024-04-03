import Counter from "@/views/Counter/Index"
import { useState } from "react"
import "./App.css"

function App() {
  const [display, setDisplay] = useState(true)

  const handerUnmountComponent = () => {
    setDisplay(!display)
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={handerUnmountComponent}>卸载 Counter</button>
      {display && <Counter />}
    </div>
  )
}

export default App
