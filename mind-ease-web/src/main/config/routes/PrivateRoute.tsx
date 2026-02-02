import { Outlet } from 'react-router-dom'



interface PrivateRouteProps {
  allowedRoles: string[]
}

export const PrivateRoute = ({ allowedRoles }: PrivateRouteProps) => {

  return (
    <Outlet />
  )
}

