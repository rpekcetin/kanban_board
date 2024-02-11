import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const Panel = lazy(() => import('../pages/Panel'))
import Layout from '../layout/Layout'

function Router() {
  const element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Panel /> },
        { path: '/:id', element: <Home /> },
      ],
    },
  ])
  return element
}

export default Router