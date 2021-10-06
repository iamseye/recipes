import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
const query = graphql`
  {
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`
const Gallary = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const imagePath = getImage(image)
        if (imagePath) {
          return (
            <article key={index} className="item">
              <GatsbyImage
                image={imagePath}
                alt={image.name}
                className="image-item"
              />
            </article>
          )
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 0.5rem;
  }
  .image-item {
    border-radius: 0.5rem;
  }
`

export default Gallary
