import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { signOut } from '@/presentation/stores/auth-store'

export const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const logout = async () => {
    signOut()

    localStorage.clear()
    sessionStorage.clear()

    queryClient.clear()

    try {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map((name) => caches.delete(name)))
    } catch (error) {
      console.error('Failed to clear caches:', error)
    }

    navigate('/login')
  }

  return { logout }
}
