import React from 'react'
import PropTypes from 'prop-types'

export default function BodyWrapper({ children }) {
  return (
    <div className="relative min-h-screen">
      <main className="w-full min-h-screen">{children}</main>
    </div>
  )
}

BodyWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
