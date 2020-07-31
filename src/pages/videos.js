import React from "react"
import Layout from "../components/layout/layout"
import Events from "../components/videos/videos"
import PageLayout from "../components/layout/page-layout"

const VideosPage = () => (
  <Layout designNumber={1}>
    <PageLayout title="Our Videos">
        <Events />
    </PageLayout>
  </Layout>
)

export default VideosPage
