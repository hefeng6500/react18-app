import { useAppDispatch, useAppSelector } from "@/hooks"
import { decrement, increment, selectCount } from "./counterSlice"

export default function Counter() {
  // 使用 `useAppSelector` hook 使得 `state` 参数已经正确输入为 `RootState`

  // const count  = useAppSelector(state => state.counter.value)
  // 直接使用 `selectCount` 代替 `state => state.counter.value`
  const count = useAppSelector(selectCount)

  const dispatch = useAppDispatch()

  const handlerClickIncrement = () => dispatch(increment())

  const handlerClickDecrement = () => dispatch(decrement())

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
        {count}
      </span>
      <button onClick={handlerClickDecrement}>Decrement</button>
    </div>
  )
}
