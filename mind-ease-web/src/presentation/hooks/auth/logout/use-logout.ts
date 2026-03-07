import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { signOut } from '@/presentation/stores/auth-store'

export const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const logout = async () => {
    // 1. Limpa Zustand auth store
    signOut()

    // 2. Limpa storages locais do navegador
    localStorage.clear()
    sessionStorage.clear()

    // 3. Limpa cache do React Query
    queryClient.clear()

    // 4. Limpa Service Worker caches (se existir PWA)
    try {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map((name) => caches.delete(name)))
    } catch (error) {
      console.error('Failed to clear caches:', error)
    }

    // 5. Redireciona para o login
    navigate('/login')
  }

  return { logout }
}
