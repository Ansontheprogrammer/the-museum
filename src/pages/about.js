import React from "react"
import Layout from "../components/layout/layout"
import AboutSection from "../components/about/about"
import PageLayout from "../components/layout/page-layout"

const AboutPage = () => (
  <Layout designNumber={0}>
    <PageLayout title="About Us">
      <AboutSection />
    </PageLayout>
  </Layout>
)

export default AboutPage
