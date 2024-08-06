import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Geners from './Components/Geners'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Moviedetails from './Components/Moviedetails'
import Trends from './Components/Trends'
import Favourite from './Components/Favourite'
import Upcoming from './Components/Upcoming'
import SearchCom from './Components/SearchCom'





export default function App() {
  const queryClient = new QueryClient()

  const routes = createBrowserRouter([{
    path: '/', element: <Layout></Layout>, children: [
      { index: true, element: <Geners></Geners> },
      { path: '/moviedetails/:id', element: <Moviedetails></Moviedetails> },
      { path: '/trending', element: <Trends></Trends> },
      { path: '/upcoming', element: <Upcoming></Upcoming> },
      { path: '/favourite', element: <Favourite></Favourite> },
      { path: '/search/:title', element: <SearchCom></SearchCom> },
    ]
  }])
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </QueryClientProvider>
  )
}
