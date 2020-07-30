import React from "react"
import PropTypes from "prop-types"
import LayoutStyles from "./page-layout.module.scss"

const PageLayout = ({ children, title }) => {
  return (
    <>
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
