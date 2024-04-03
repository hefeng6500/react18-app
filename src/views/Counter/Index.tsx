import store from "@/store"
import { useEffect, useState } from "react"

export default function Counter() {
  const [value, setValue] = useState(store.getState().count)

  const handlerClickIncrement = () => {
    store.dispatch({ type: "INCREMENT" })
  }

  const handlerClickDecrement = () => {
    store.dispatch({ type: "DECREMENT" })
  }

  useEffect(() => {
    console.log("测试每次渲染都会执行！")
  }, [])

  useEffect(() => {
    console.log("Counter mounted!")

    const unsubscribe = store.subscribe(() => {
      // 当 Redux store 的状态发生变化时，更新组件的状态
      setValue(store.getState().count)
    })

    return () => {
      console.log("Counter Will Unmount!")
      // 在组件卸载时取消订阅
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <h1>Counter Page</h1>

      <button onClick={handlerClickIncrement}>Increment</button>
      <span
        style={{
          margin: "0 20px",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        {value}
      </span>
      <button onClick={handlerClickDecrement}>Decrement</button>
    </div>
  )
}
