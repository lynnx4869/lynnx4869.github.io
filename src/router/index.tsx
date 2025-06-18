import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))
const Persona5Royal = React.lazy(() => import('../pages/persona5Royal'))
const EldenRing = React.lazy(() => import('../pages/eldenRing'))
const DragonsDogma2 = React.lazy(() => import('../pages/dragonsDogma2'))

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
  {
    path: '/dragons_dogma_2',
    element: (
      <Suspense>
        <DragonsDogma2 />
      </Suspense>
    ),
  },
])

const Routers = () => <RouterProvider router={router} />

export default Routers
