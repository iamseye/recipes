import React from 'react'

import { graphql, useStaticQuery} from 'gatsby'
const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
          )
        }
      }
    }
  }
`
const Gallary = () => {
    const data = useStaticQuery(query);
    console.log(data);
    return (
        <div>
            <h2>Simple Gallary images</h2>

        </div>
    )
}

export default Gallary
