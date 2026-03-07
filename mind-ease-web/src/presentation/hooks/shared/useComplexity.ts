import { useCallback } from 'react'
import { useComplexityStore, ComplexityLevel } from '@/presentation/stores/complexity-store'

export function useComplexity() {
  const { complexityLevel, setComplexityLevel } = useComplexityStore()

  const changeComplexity = useCallback(
    (level: ComplexityLevel) => setComplexityLevel(level),
    [setComplexityLevel],
  )

  return { complexityLevel, changeComplexity }
}
