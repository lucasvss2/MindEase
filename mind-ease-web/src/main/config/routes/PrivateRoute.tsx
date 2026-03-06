import { Outlet, Navigate } from 'react-router-dom'
import authStore from '@/main/config/stores/auth-store'

interface PrivateRouteProps {
  isPublicRoute?: boolean
}

export const PrivateRoute = ({ isPublicRoute }: PrivateRouteProps) => {
  const isUserAuthenticated = authStore((state) => state.isUserAuthenticated)

  if (isPublicRoute) {
    return isUserAuthenticated ? <Navigate to="/board" replace /> : <Outlet />
  }

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}
