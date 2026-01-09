import { useReducer } from 'react'

export const useToggle = (initialValue: boolean) =>
  useReducer((prevState) => !prevState, initialValue)
