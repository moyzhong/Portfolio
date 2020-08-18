import React from 'react'
import styled from 'styled-components'

let FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 5rem 0;
    display: grid;
    grid-gap: 2rem;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600px;
    color: #486791;
    max-width: 50rem;
    margin: 0 auto;
`
const Button = styled.button`
    font-size: 24px;
    color: white;
    border: none;
    padding: 1.6rem 6rem;
    font-weight: 600;
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    justify-self: center;
    transition: 0.8s cubic-bexier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
    }
`
let LinkGroup = styled.div`
    width: 50rem;
    margin: 5rem auto;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-gap: 1rem;

    a {
        color:#5334F5;
        font-size: 2rem;
        font-weight: 500;
        margin: 0.5rem 0;
        transition: 1s;
    }

    a:hover {
        color:black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 2rem;
`

const Footer = ({data, children}) => (
<FooterGroup>
     <Text>Tweet "Prototype and build apps with React and Swift. New courses by @MengTo."</Text>
     <Button>Tweet</Button>
     <LinkGroup>{allContentfulLink.edges.map(edge => 
        (<a href={edge.node.url}>{edge.node.title}</a>
        ))}
     </LinkGroup>
</FooterGroup>

)

export default Footer