import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Button from "../Button"

const CaseStudy = () => {

  const casestudyquery = useStaticQuery(graphql`
  query{
    allMdx{
      nodes{
        frontmatter{
          title
          subtitle
          description
          path
          classname
          imageurl
          imagealt
        }
        id
      body
      }
      
    }
  }`)

  return (
    <>
      {casestudyquery.allMdx.nodes.map((node) => (
        <div key={node.id} className={`case-study-container`}>
          <div className={`case-study-left`}>
            <div className={`case-study-text`}>
              <p className={`case-study-subtitle`}>{node.frontmatter.subtitle}</p>
              <h3 className={`case-study-title`}>{node.frontmatter.title}</h3>
              <p className={`case-study-description`}>{node.frontmatter.description}</p>
              <Button name={`View project`} link={undefined} />
            </div>
          </div>
          <div className={`case-study-right ${node.frontmatter.classname}`}>
            <img src={node.frontmatter.imageurl} alt={node.frontmatter.imagealt} />
          </div>
        </div>
      ))}

    </>
  )
}

export default CaseStudy