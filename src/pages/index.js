import React from "react"
import HeroSection from "../components/HeroSection"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Demo from "../components/Demo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
    <Demo/>
    <Image />
  </Layout>
)

export default IndexPage
