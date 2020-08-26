import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { Link } from "gatsby"
const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
        backgroundimagee: file(relativePath: { eq: "Porsha.jpg" }) {
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
    <div className="Blureffect"></div>
        <div className="Maintxt">
        <div className="smalltxt">
        <h1>Developer in learning</h1>
        </div>
        <div className="biggrtxt">
        <h1>Creating leg-sweeping <br/>
        apps & websites.</h1>
        </div>
        <div className="buttonsban">
        <nav>
        <Link className="button1" to="/Projects">View Projects</Link>
        <Link className="button2" to="/Contact">Contact Me</Link>
        </nav>
        </div>
        </div>
    </div>
    <div>
    </div>
    </div> //* Stay within!
) 
}

export default Banner