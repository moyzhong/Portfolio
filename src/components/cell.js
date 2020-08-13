
import React from 'react'
import styled from 'styled-components'


const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 6rem auto;
    grid-gap: 2.5rem;
    align-items: center; 
    min-width: 32rem;
`
const CellImage = styled.div`
    width: 6rem;
    height: 6rem;
    background: black;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 6rem;
`
const CellTitle = styled.div`
    font-size: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 3rem 0;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}> </CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell