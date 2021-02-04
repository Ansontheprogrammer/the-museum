/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { getKbuttaProducts } = require("./src/api/");

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/admin/)) {
    page.matchPath = `/admin/*`;

    // Update the page.
    createPage(page);
  }
};
