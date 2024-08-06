import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Bounce, ToastContainer } from 'react-toastify';
export default function App() {
  const queryClient = new QueryClient()

  const routes = createBrowserRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: 'footer', element: <Footer></Footer> },
      ]
    }
  ])

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
        <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"

        ></ToastContainer>
      </QueryClientProvider>
    </div>
  )
}
