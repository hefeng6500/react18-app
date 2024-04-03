import { useEffect, useState } from "react"
import store from "../../store"

export default function Counter() {
  const [value, setValue] = useState(store.getState().count)

  const handlerClickIncrement = () => {
    store.dispatch({ type: "INCREMENT" })
  }

  const handlerClickDecrement = () => {
    store.dispatch({ type: "DECREMENT" })
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // 当 Redux store 的状态发生变化时，更新组件的状态
      setValue(store.getState().count)
    })

    return () => {
      // 在组件卸载时取消订阅
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <h1>Counter</h1>

      <button onClick={handlerClickIncrement}>Increment</button>
      <h1>{value}</h1>
      <button onClick={handlerClickDecrement}>Decrement</button>
    </div>
  )
}
