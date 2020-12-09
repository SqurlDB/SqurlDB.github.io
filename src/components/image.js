import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {VscGithubInverted} from 'react-icons/vsc'
import {SiLinkedin} from 'react-icons/si'
import {IconContext} from 'react-icons/lib'
import Img from 'gatsby-image'
import "./image.css"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {extension: {regex: "/(jpg)/"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }  
  `)
  const gitHubAndLinkedinInfo = [
    {
      githubHandle: "dsryan8197", 
      github:"https://github.com/dsryan8197",
      linkedin:"https://www.linkedin.com/in/dseamusryan/"
    },
    {
      github:"https://github.com/trentcurrie",
      linkedin:"https://www.linkedin.com/in/trentdcurrie/"
    },
    {
      github:"https://github.com/capena91",
      linkedin:"https://www.linkedin.com/in/carlospena91/"
    },
    {
      github:"https://github.com/a4heng",
      linkedin:"https://www.linkedin.com/in/andy-heng-037206201/"
    }
  ]

  return(
    <IconContext.Provider value={{size:"2.5rem"}}>
      <div className='image-container'>
        <div >
          <h1> Meet The Team</h1>
        </div>
        <div className='image-grid'>
          {data.allFile.edges.map((image, idx) => (
            <div className="profile-container">
            <Img key={idx}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
            />
            <div className="profile-img-info-container">
              <p>
                <a href={`${gitHubAndLinkedinInfo[idx].github}`}>
                <VscGithubInverted/> 
                </a>
              </p>
              <p>
                <a href={`${gitHubAndLinkedinInfo[idx].linkedin}`}>
                <SiLinkedin/> 
                </a>
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Image
