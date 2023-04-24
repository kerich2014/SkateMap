import React from 'react'
import Map from './routes/map'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Root from './routes/root'
import School from './routes/school'
import Profile from './routes/profile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/school",
    element: <School />,
  },
  {
    path: "/profile",
    element: <Profile />
  },

]);

export default router;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
