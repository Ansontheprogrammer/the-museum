import React from 'react'
import styled from 'styled-components'

export const Section = (props) => (
    <SectionWrapper>
        {props.children}
    </SectionWrapper>
)

export const SectionRow = (props) => (
    <SectionWrapperRow>
        {props.children}
    </SectionWrapperRow>
)

export const SectionWrapper = styled.section`
    display: block;
`

export const SectionWrapperRow = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 900px) {
        flex-direction: column
   }
`

export const Padding = styled.div`
    padding: 3rem;
`

export const SpacingSm = styled.div`
    margin-top: 2rem;
`
export const SectionHeader = styled.div`
    h1 {
        color: #2F2E2E;
        padding-left: 2vw;
        font-weight: bold;
    }

    margin-bottom: 7.5vh;

    @media only screen and (max-width: 900px) {
        text-align: center;
        
        h1 {
            padding-left: revert;
            margin-left: revert;
        }
   }
`

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    min-height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 275px;
    color: "#333";

    .variations {
    height: 30px;
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: center;
    }

    .variation-image {
    height: 50px;
    width: 50px;
    border-radius: 1rem;
    margin-right: 50px;
    background-size: cover;
    background-color: red($color: #000000);
    }

    .shop-selection {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px 25px 5px 25px;
    color: #2f2f2f;
    border-radius: 2%;
    border-color: #fff;
    background-color: #fff

    
    }
    .image {
    min-height: 200px;
    min-width: 100%;
    border-radius: 2.5%;
    background-size: cover;
    }

    .price {
    color: #999;
    margin-bottom: 15px;
    }

    .title {
    margin-bottom: 10px;
    margin-top: 10px;

    h4 {
        font-weight: lighter;
        font-family: 'Lato';
    }
    }

    p {
    text-align: left;
    color: #555;
    margin-top: 20px;
    
    }

    a {
    width: 100%;
    text-align: center;
    color: #333;
    outline: none;
    padding: 12px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 6px;
    letter-spacing: 1.5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: darken(rgb(152, 253, 152), 10%);
    }
    }

    select {
    background-color: #fff;
    }

    .text {
    margin-bottom: auto; 
    margin-top: 10px;
    }
`
