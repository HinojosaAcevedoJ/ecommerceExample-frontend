import React from 'react'
import PropTypes from 'prop-types'

import NavSidebar from './SideBar'
import BodyWrapper from './BodyWrapper'
import Navbar from './Navbar'

export default function DashboardLayout({ children }) {
  return (
    <BodyWrapper>
      <Navbar />
      <div className="flex h-screen bg-gray-200">
        <NavSidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired
}
