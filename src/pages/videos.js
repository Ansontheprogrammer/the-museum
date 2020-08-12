import React from "react"
import Layout from "../components/layout/layout"
import Videos from "../components/videos/videos"
import PageLayout from "../components/layout/page-layout"

const VideosPage = () => (
  <Layout designNumber={1}>
    <PageLayout title="Our Videos">
        <Videos />
    </PageLayout>
  </Layout>
)

export default VideosPage
