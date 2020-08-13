
import React from 'react'
import styled from 'styled-components'
import Wave from "./wave.js"


const SectionGroup = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    height: 76rem;
    display: grid;
    grid-template-rows: 30rem auto;
    grid-gap: 2rem;
    position: relative;

    @media (max-width: 800px) {
        height: 82rem;
    }
`

const SectionLogo = styled.img`
    width: 12.8rem;
    margin: 2rem auto 0;
    align-self: end;
`

const SectionTitleGroup = styled.div`
    max-width: 80rem;
    margin: 2rem auto 0;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 30rem auto;
    grid-template-rows: auto 100%;

    @media (max-width: 800px) {
        margin: 2em 4em 0;
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 6rem;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 800px) {
        font-size: 4rem;
    }
`

const SectionText = styled.p`
    font-size: 2rem;
    color: white;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -0.6rem;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -0.6rem;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image = {props.image}>
        <WaveTop><Wave /></WaveTop>

        <SectionLogo src = {props.logo} />
        <SectionTitleGroup>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>

        <WaveBottom><Wave /></WaveBottom>

    </SectionGroup>
)

export default Section