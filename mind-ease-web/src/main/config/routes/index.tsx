import { BrowserRouter, Route, Routes as ReactRoutes/* , Navigate */ } from 'react-router-dom'

/* import { PrivateRoute } from './PrivateRoute' */
import {
  LandingPage
} from '@/presentation'

export const Routes = () => {
  return (
    <BrowserRouter >
      <ReactRoutes>
        {/* Redirect Login */}
        <Route path="/" >
          <Route index element={<LandingPage />} />
        </Route>

        {/* Private Routes */}
        {/*         <Route path="/" element={<PrivateRoute allowedRoles={['SYS_ADMIN', 'ADMIN', 'EDITOR', 'READER']} />}>
          <Route index element={<Navigate to="/home" replace={false} />} />
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="/notifications" element={<PrivateRoute allowedRoles={['SYS_ADMIN', 'ADMIN', 'EDITOR', 'READER']} />}>
          <Route index element={<NotificationsPage />} />
        </Route> */}


      </ReactRoutes>
    </BrowserRouter>
  )
}
