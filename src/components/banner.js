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
        <div className="Blureffect"></div>
        <Img fluid={data.backgroundimagee.childImageSharp.fluid} />
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
    <div className="Maindata">
    <div className="Mainsubdata">
    <h2>Who am i</h2>
    <h1>Developer in Learning</h1>
    <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h4>
    </div>
    <div className="Maindataimg"></div>
    </div>
    </div> //* Stay within!
) 
}

export default Banner