import React from 'react'
import Header from './header'

function Layout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  )
}

export default Layout
