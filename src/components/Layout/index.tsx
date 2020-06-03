import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

interface Props {
  location: Location
  title: string
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.lewisneedham.com/">Lewis Needham</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
