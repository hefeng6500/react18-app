import type { AppDispatch, RootState } from "@/store"
import { useDispatch, useSelector } from "react-redux"

/**
 * 为什么要定义 useAppDispatch 和 useAppSelector？
 * 因为 useDispatch 和 useSelector 函数本身没有类型信息，所以无法推断出它们的返回值类型。
 * 所以我们定义了 useAppDispatch 和 useAppSelector，
 * 让 TypeScript 可以推断出它们的返回值类型。
 *
 * docs: https://react-redux.js.org/tutorials/typescript-quick-start#define-typed-hooks
 */

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
