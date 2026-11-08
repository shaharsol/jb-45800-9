import { useContext, useState } from 'react'
import Layout from '../layout/layout/Layout'
import './App.css'
import Login from '../auth/login/Login'
import AuthContext from '../auth/auth/AuthContext'

function App() {

  const { jwt } = useContext(AuthContext)

  return (
    <>
      {!jwt && <Login />}
      {jwt && <Layout />}
    </>
  )
}

export default App
