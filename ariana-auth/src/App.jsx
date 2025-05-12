import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import ROUTES from './core/constants/routes/routes.constants'

const App = () => {
  return (
    <Routes>
    <Route path={ROUTES.Login} element={<Login />} />
    <Route path={ROUTES.Register}  element={<Register />} />
    <Route path={ROUTES.Dashboard} element={<Dashboard />} />
  </Routes>
  )
}

export default App