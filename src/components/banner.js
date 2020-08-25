import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
        backgroundimagee: file(relativePath: { eq: "alsoporsha.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 3080, quality: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        }
    }
    `)
    return (
    <div className="bannerimage">
    <div className="imaget">
        <Img fluid={data.backgroundimagee.childImageSharp.fluid} />
    </div>
    <div className="Blureffect"></div>
    <div>

    </div>
    </div> // Stay within!
) 
}

export default Banner