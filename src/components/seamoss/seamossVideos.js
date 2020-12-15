import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../products/styles/product-wrapper.styles.scss";
import "../layout/layout.scss";

const SeaMossVideos = () => {
  const data = useStaticQuery(graphql`
    query getSeamossContent {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(seamoss)/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              links
              bio
            }
          }
        }
      }
    }
  `);

  let clients = [];

  const seaMossVideos = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.bio)
    .map((edge, index) => {
      const { name, bio, links } = edge.node.frontmatter;
      clients.push({ name, bio, links });

      return links.map((link, index) => (
        <div key={name + index} className="">
          <iframe
            style={{ marginTop: "20px" }}
            className=""
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            width="250"
            height="150"
            // Requires youtube embed link
            src={links ? links[index] : ""}
            title={name}
          />
        </div>
      ));
    })
    .map(post => post);

  const clientJSX = clients
    .map(client => (
      <>
        <h3>{client.name}</h3>
        <p>{client.bio}</p>
      </>
    ))
    .map(jsx => jsx);

  return (
    <>
      <h2>Clients</h2>
      <div className="clients">
        {clientJSX.map((client, index) => (
          <div className="spacing">
            {client}
            {seaMossVideos[index]}
          </div>
        ))}
      </div>
    </>
  );
};

export default SeaMossVideos;
