import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  BoardPage,
  ProfilePage
} from '@/presentation'

export const Routes = () => {
  return (
    <BrowserRouter >
      <ReactRoutes>
        {/* Public Routes */}
        <Route path="/" >
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/register" >
          <Route index element={<RegisterPage />} />
        </Route>
        <Route path="/login" >
          <Route index element={<LoginPage />} />
        </Route>

        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute allowedRoles={['*']} />}>
          <Route index element={<Navigate to="/board" replace={false} />} />
          <Route path="board" element={<BoardPage />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute allowedRoles={['*']} />}>
          <Route index element={<ProfilePage />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  )
}
