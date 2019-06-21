import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <p><Link to="/about">about</Link></p>
    <p><Link to="/about-css-modules">about-css-modules</Link></p>
    <p><Link to="/contact/">Contact</Link></p>

    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)