import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login-Signup/LoginSingup.jsx'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>,
      },
    {
      path: "student-dashboard",
     element: <StudentDashboard/>
    }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
