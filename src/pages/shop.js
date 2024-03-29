import React, { Component } from "react";
import Layout from "../components/layout/layout";
import PageLayout from "../components/layout/page-layout";
import Products from "../components/products/components/products";
import "../components/products/styles/product-wrapper.styles.scss";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { SpacingSm } from "../components/typographics";

// list of items
const categoryList = [
  { name: "all" },
  { name: "apparel" },
  { name: "hair" },
  { name: "misc." },
];

// list of items
const vendorList = [
  { name: "all" },
  { name: "the one museum" },
  { name: "k-butta" },
];

class ShopPageComponent extends Component {
  constructor(props) {
    super(props);
  }

  toggleSelectorMenus = (selector, value) => {
    return () => {
      this.setState({
        selectors: {
          ...this.state.selectors,
          [selector]: !this.state[selector],
        },
      });
    };
  };
  selectors = {
    category: {
      // displayedMenu: this.generateButtonList(categoryList, 'category'),
      nonDisplayed: (
        <button onClick={this.toggleSelectorMenus("category")}>
          Show Category Menu
        </button>
      ),
    },
    vendor: {
      // displayedMenu: this.generateButtonList(vendorList, 'vendor'),
      nonDisplayed: (
        <button onClick={this.toggleSelectorMenus("vendor")}>
          Switch Vendors
        </button>
      ),
    },
  };

  state = {
    kButtaProducts: [],
    category: "",
    vendor: "",
    selectors: {
      category: false,
      vendor: false,
    },
  };

  onSelectorChoice = (selectorType) => {
    return (e) => {
      this.setState({
        [selectorType.name]: selectorType.btnName,
      });
    };
  };

  render() {
    const { category, vendor } = this.state;
    // Create menu from items

    return (
      <div className="product-page-product-wrapper">
        <div className="top-category-menu">
          <p className="category-menu-label">Filter by category:</p>
          {categoryList.map((btn) => {
            return (
              <>
                <button
                  className={
                    btn.name === this.state.category ||
                    (btn.name.toLowerCase() === "all" &&
                      this.state.category === "")
                      ? "active-selection"
                      : ""
                  }
                  onClick={this.onSelectorChoice({
                    name: "category",
                    btnName: btn.name,
                  }).bind(this)}
                >
                  {btn.name}
                </button>
              </>
            );
          })}
        </div>

        <div className="product-page-right">
          <div className="left-category-menu">
            <p className="category-menu-label">Filter by vendor:</p>

            {vendorList.map((btn) => (
              <button
                className={
                  btn.name === this.state.vendor ||
                  (btn.name.toLowerCase() === "all" && this.state.vendor === "")
                    ? "active-selection"
                    : ""
                }
                onClick={this.onSelectorChoice({
                  name: "vendor",
                  btnName: btn.name,
                }).bind(this)}
              >
                {btn.name}
              </button>
            ))}
          </div>
          <Products
            multiVendor={this.state.kButtaProducts}
            perRow={2}
            category={category}
            vendor={vendor}
            displayAddToCartBtn={true}
          />
        </div>
      </div>
    );
  }
}

const Shop = () => (
  <Layout useCart={true}>
    <PageLayout title="Our Products">
      <ShopPageComponent />
    </PageLayout>
  </Layout>
);

export default Shop;
