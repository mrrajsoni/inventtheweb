import { graphql } from "gatsby"
import * as React from "react"

const Project = ({ data }) => {
  return (
    <div className={`project-container`}>
      <h1>{data.mdx.frontmatter.title}</h1>
    </div>
  )
}

export const projectQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      id
      body
    }
  }
`

export default Project
