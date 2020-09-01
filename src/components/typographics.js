import styled from 'styled-components'

export const Section = styled.section`
    margin-bottom: 25px;
    
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
    max-height: 500px;
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
    font-size: 20px;

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
    font-size: 13px;
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
