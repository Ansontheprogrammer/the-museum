import React from "react";
import styled from "styled-components";

export const Section = props => (
  <SectionWrapper>{props.children}</SectionWrapper>
);

export const SectionRow = props => (
  <SectionWrapperRow>{props.children}</SectionWrapperRow>
);

export const SectionColumn = props => (
  <SectionWrapperColumn>{props.children}</SectionWrapperColumn>
);

const SectionWrapper = styled.section`
  display: block;
`;

const SectionWrapperRow = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const SectionWrapperColumn = styled.section`
  display: flex;
  display: -webkit-box;
  -webkit-box-pack: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
`;

export const Padding = styled.div`
  padding: 3rem;
`;

export const SpacingSm = styled.div`
  margin-top: 2rem;
`;
export const SectionHeader = styled.div`
  h1 {
    color: #2f2e2e;
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
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  color: "#333";
  box-shadow: 0 2px 10px rgba(47, 47, 47, 0.08);
  background-color: #fff;

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
    margin: 20px 20px 0px;
    padding: 5px 25px 5px 25px;
    color: #2f2f2f;
    border-radius: 6px;
    border-color: #fff;
    background-color: #eee;
  }
  .image {
    min-height: 200px;
    min-width: 100%;
    border-radius: 2.5% 2.5% 0 0;
    background-size: cover;
  }

  .price {
    color: #999;
    /* margin-bottom: 15px; */
  }

  .title {
    margin-bottom: 10px;
    margin-top: 10px;

    h4 {
      font-weight: lighter;
      font-family: "Lato";
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
    box-shadow: none;
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
    padding: 20px 20px 0;
  }
`;

export const HeroWrapper = styled.div`
  height: 95vh;
  width: 100%;
  padding-left: 7vw;
  padding-top: 15vh;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(43, 43, 43, 0.75))
    ),
    url("https://res.cloudinary.com/dhgnvzmi3/image/upload/v1598888656/IMG_3049_d12gio.jpg");
  background-size: cover;
  color: #fff;
  @media only screen and (max-width: 600px) {
    height: auto;

    padding-left: 0vw;
    .description {
      padding-left: 5vw;
      padding-right: 5vw;
    }
  }
  h1 {
    max-width: 700px;
    font-weight: normal;
    color: #eee;
  }

  h2 {
    font-weight: 100;
    color: #eee;
  }

  h3 {
    color: #eee;
    margin-bottom: 25px;
  }
  .description {
    margin-bottom: 7.5vh;
    font-weight: lighter;
    font-family: "Lato";
  }
`;
