import ReactDOM from 'react-dom/client'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import MainPage from "@pages/MainPage"
import DoctorAppointmentPage from "@pages/DoctorAppointmentPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/appointment",
    element: <DoctorAppointmentPage />,
  },
], {
  basename: '/webapp-med/',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
