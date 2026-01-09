import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from 'react-router-dom'

import {
  HomePage,
  DashboardPage
} from '@/features'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {/* Redirect Login */}
        <Route path="/" >
          <Route index element={<Navigate to="/home" replace={false} />} />
          <Route path="home" element={<HomePage />} />
        </Route>

        {/* Private Routes */}
        <Route path="/dashboard" >
          <Route index element={<DashboardPage />} />
        </Route>

      </ReactRoutes>
    </BrowserRouter>
  )
}
