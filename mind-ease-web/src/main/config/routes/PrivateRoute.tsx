import { Outlet, Navigate } from 'react-router-dom'
import authStore from '@/main/config/stores/auth-store'
import { useFontSize, useLetterSpacing, useLineHeight } from '@/presentation'

interface PrivateRouteProps {
  isPublicRoute?: boolean
}

export const PrivateRoute = ({ isPublicRoute }: PrivateRouteProps) => {
  const isUserAuthenticated = authStore((state) => state.isUserAuthenticated)
  useFontSize()
  useLetterSpacing()
  useLineHeight()

  if (isPublicRoute) {
    return isUserAuthenticated ? <Navigate to="/board" replace /> : <Outlet />
  }

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}

