import { Navigate, Outlet } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import { clearAllCaches } from '@/common'
import { authStore } from "@/app"
import { useQuery } from '@tanstack/react-query'
import { areasQueries, userQueries } from '@/features'

interface PrivateRouteProps {
  allowedRoles: string[]
}

export const PrivateRoute = ({ allowedRoles }: PrivateRouteProps) => {
  const { idToken, refreshToken, userAuthenticated, permissions } = authStore(
    (s) => ({
      idToken: s.id_token,
      refreshToken: s.refresh_token,
      userAuthenticated: s.isUserAuthenticated,
      permissions: s.permissions,
    }),
    shallow,
  )

  const isAuthenticated = idToken && refreshToken && userAuthenticated

  if (!isAuthenticated) {
    clearAllCaches()
    return <Navigate to='https://www.hml.acer-loginunico.com/' />
  }

  //queries
  const {
    data: user,
  } = useQuery(userQueries.getUserData(true))

  const {
    data: areasByUser,
  } = useQuery(areasQueries.getAreaByUser())

  if (user !== undefined) {
    authStore.setState(
      {
        permissions: user.area_profile,
        user_id: user.id
      },
    )
  }

  if (areasByUser !== undefined) {
    authStore.setState(
      {
        active_area_id: areasByUser.active_area_id,
      },
    )
  }

  if (allowedRoles && permissions) {
    if (!permissions) {
      console.error('No roles')

      clearAllCaches()
      return <Navigate to='https://www.hml.acer-loginunico.com/' />
    }

    const isAllowed = allowedRoles.includes(permissions)

    if (!isAllowed) {
      console.error('Not allowed')

      return <Navigate to="/" replace />
    }

    return (
      <Outlet />
    )
  }

  return (
    <Outlet />
  )
}

