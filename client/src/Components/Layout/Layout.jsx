import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-screen w-full bg-black text-white spy-grid scanlines relative overflow-hidden">

      {/* Particles in background only */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <span className="particle absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-40"></span>
        <span className="particle absolute top-40 right-20 w-3 h-3 bg-amber-500 rounded-full opacity-40 [animation-delay:2s]"></span>
        <span className="particle absolute bottom-20 left-1/2 w-2 h-2 bg-amber-300 rounded-full opacity-40 [animation-delay:4s]"></span>
      </div>

      {/* Page Content (on top) */}
      <div className="relative z-10">
        <Topbar />

        <main className="max-w-6xl mx-auto px-4 pt-6 pb-16">
          <Outlet />
        </main>

        <Footer />
      </div>

    </div>
  )
}

export default Layout
