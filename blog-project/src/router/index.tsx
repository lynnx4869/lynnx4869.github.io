import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))
const WanderingSword = React.lazy(() => import('../pages/wanderingSword'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/wandering_sword',
    element: (
      <Suspense>
        <WanderingSword />
      </Suspense>
    ),
  },
])

const Routers = () => <RouterProvider router={router} />

export default Routers
