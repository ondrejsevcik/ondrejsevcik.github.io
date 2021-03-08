import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Styleguide({ data }) {
  const page = data.markdownRemark
  return (
    <Layout>
      <header>
        <h1>{page.frontmatter.title}</h1>
      </header>
      <article dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

export const query = graphql`
  query Styleguide {
    markdownRemark(fields: { slug: { eq: "/styleguide-content/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`