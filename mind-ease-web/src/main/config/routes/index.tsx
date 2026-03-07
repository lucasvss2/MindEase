import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  BoardPage,
  ProfilePage,
  FocusModePage
} from '@/presentation'
import { } from '@/presentation/pages/app/FocusModePage'

export const Routes = () => {
  return (
    <BrowserRouter >
      <ReactRoutes>
        {/* Public Routes - Restrict Authenticated Users */}
        <Route element={<PrivateRoute isPublicRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Private Routes - Deny Unauthenticated Users */}
        <Route element={<PrivateRoute />}>
          <Route path="/board" element={<BoardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/focus" element={<FocusModePage />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  )
}
