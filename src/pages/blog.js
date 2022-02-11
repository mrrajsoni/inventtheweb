import { graphql } from "gatsby"
import * as React from "react"

const BlogPage = ({ data }) => {
  return (
    <div>
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </div>
  )
}

export const blogQuery = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
