import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))
const WanderingSword = React.lazy(() => import('../pages/wanderingSword'))
const Persona5Royal = React.lazy(() => import('../pages/persona5Royal'))
const EldenRing = React.lazy(() => import('../pages/eldenRing'))

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
  {
    path: '/persona5_royal',
    element: (
      <Suspense>
        <Persona5Royal />
      </Suspense>
    ),
  },
  {
    path: '/elden_ring',
    element: (
      <Suspense>
        <EldenRing />
      </Suspense>
    ),
  },
])

const Routers = () => <RouterProvider router={router} />

export default Routers
