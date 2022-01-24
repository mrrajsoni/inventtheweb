import { graphql } from "gatsby"
import * as React from "react"
import NavBar from "../components/navbar"

const BlogPage = ({ data }) => {
  return (
    <div>
      <NavBar pageTitle="Blogs"></NavBar>
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
