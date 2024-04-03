import { configureStore } from "@reduxjs/toolkit"

interface InitialState {
  count: number
}

const initialState: InitialState = {
  count: 0,
}

const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      }
    case "INCREMENT_BY_AMOUNT":
      return {
        ...state,
        count: state.count + payload,
      }
    default:
      return state
  }
}

const store = configureStore({
  reducer,
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
