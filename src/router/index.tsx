import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
])

const Routers = () => <RouterProvider router={router} />

export default Routers
