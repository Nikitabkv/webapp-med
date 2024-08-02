import ReactDOM from 'react-dom/client'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import MainPage from "@pages/MainPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
], {
  basename: '/webapp-med/',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
