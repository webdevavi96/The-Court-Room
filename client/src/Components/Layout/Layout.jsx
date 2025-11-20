import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Layout() {
  
  return (
    <div className="min-h-screen w-full bg-black text-white spy-grid scanlines relative overflow-hidden">

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <span className="particle absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-40"></span>
        <span className="particle absolute top-40 right-20 w-3 h-3 bg-amber-500 rounded-full opacity-40 [animation-delay:2s]"></span>
        <span className="particle absolute bottom-20 left-1/2 w-2 h-2 bg-amber-300 rounded-full opacity-40 [animation-delay:4s]"></span>
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex">

        {/* Topbar only on small devices */}
        <div className="md:hidden w-full fixed top-0 left-0 z-50">
          <Topbar />
        </div>

        {/* Sidebar (visible on md+) */}
        <div className="hidden md:block fixed top-0 left-0 h-full z-40">
          <Sidebar />
        </div>

        {/* Main Content → shifted right on desktop */}
        <main className="w-full md:pl-60 mt-8 md:mt-0 max-w-6xl mx-auto px-4 pt-6 pb-16">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
