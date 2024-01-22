/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import HowToPlay from './pages/HowToPlay'
import Players from './pages/Players'
import Game from './pages/Game'
import Top from './pages/Top'
import Menu from './pages/Menu'
import Multiplayers from './pages/Multiplayers'

// Registrar rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/comojugar',
    element: <HowToPlay />
  },
  {
    path: '/jugadores',
    element: <Players />
  },
  {
    path: '/juego',
    element: <Game />
  },
  {
    path: '/top',
    element: <Top />
  },
  {
    path: '/multiplayer',
    element: <Multiplayers />
  },
  {
    path: '/menu',
    element: <Menu />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)