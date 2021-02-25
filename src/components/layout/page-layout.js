import React from "react"
import PropTypes from "prop-types"
import LayoutStyles from "./page-layout.module.scss"
import Helmet from 'react-helmet'

const PageLayout = ({ children, title }) => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | The One Museum</title>
          <link rel="canonical" href="https://the1museum.com" />
      </Helmet>
      <header className={LayoutStyles.header}>
        <h1>{title}</h1>
      </header>
      <section className={LayoutStyles.content}>{children}</section>
    </>
  )
}

PageLayout.defaultProps = {
  title: "Page Title",
}

PageLayout.propTypes = {
  title: PropTypes.string,
}

export default PageLayout
