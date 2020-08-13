import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '../components/card'
import Section from "../components/section"
import Wave from "../components/wave"
import Cell from "../components/cell"
import styled from "styled-components"
import staticdata from '../../staticdata.json'

const SectionCaption = styled.p`
    font-weight: 600;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: #94A4BA;
    text-align: center;
`

const SectionCellGroup = styled.div`
    max-width: 80rem;
    margin: 0 auto 10rem;
    padding: 2rem 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

const IndexPage = () => (
  /*
  ESTABLISHING HERO ELEMENT STYLE
  Groups act similar to groups in Figma
  */ 
 <Layout>
   <div className = "Hero">
     <div className = "HeroGroup">
      <h1>“Learn to <br />design and code React apps”</h1>
      <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. </p>
      <Link to="/page-2">Watch the video</Link>
      
      <div className= "Logos" >
        <img alt="Sketch's logo, an orange gem" src={require('../images/logo-sketch.png')} width="50" />
        <img alt="Figma's logo, a multicolored 'F'" src={require('../images/logo-figma.png')} width="50" />
        <img alt="Studio's logo, a salmon box with a white 'S'" src={require('../images/logo-studio.png')} width="50" />
        <img alt="Framer's logo, a blue 'F' in a white box overlaying a blue box" src={require('../images/logo-framer.png')} width="50" />
        <img alt="React's logo, a blue atom" src={require('../images/logo-react.png')} width="50" />
        <img alt="Swift's logo, an orange swallow" src={require('../images/logo-swift.png')} width="50" />
      </div>
      <Wave />
     </div>
   </div>

   <div className = "Cards">
      <Section 
        image = {require('../images/wallpaper2.jpg')}
        logo = {require('../images/logo-react.png')}
        title = "React for Designers"
        text = "Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netify." 
      />

      <h2>11 courses, more coming</h2>
      <div className = "CardGroup">
        <Card 
          title = "DesignSystem"
          text = "10 sections"
          image = {require('../images/wallpaper.jpg')}
        />
        <Card 
          title = "React for Designers"
          text = "12 sections"
          image = {require('../images/wallpaper2.jpg')}
        />
        <Card
          title = "Sound Design"
          text = "5 sections"
          image = {require('../images/wallpaper3.jpg')}
        />
        <Card 
          title = "ARKit2"
          text = "10 sections"
          image = {require('../images/wallpaper4.jpg')}
        />
      </div>
  </div>

  <div className = "Cells">
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
          <Cell 
              title={cell.title} 
              image = {cell.image} 
          />
        ))}
    </SectionCellGroup>
  </div>
 </Layout>
)

export default IndexPage

/*
  <Layout>
    <SEO title="Home" />
  
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
  */



