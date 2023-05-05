import React, { Suspense } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Louder from './component/Louder/Louder.jsx'
import { Home,Process,Company,Why_us,Layout } from './Routes/Routes'

const router = createBrowserRouter([
  {
    path:'/',
    element:
    <Suspense fallback = {<Louder/>} >
      <Layout />
    </Suspense>,
    children:[
      {
        index:true,
        element:(
          <Suspense fallback = {<Louder/>} >
            <Home/>
          </Suspense> 
        ),
      },
      {
        path:"Process",
        element:(
          <Suspense fallback = {<Louder/>} >
            <Process/>
          </Suspense>
        )
      },
      {
        path:"Company",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Company/>
          </Suspense>
        )
      },
      {
        path:"Why_us",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Why_us/>
          </Suspense>
        )
      },
      {
        path:"*",
        element:(
          <Suspense fallback={<Louder/>}>
            <Error/>
          </Suspense>
        )
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App