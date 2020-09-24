import React, { Component } from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import "../components/products/styles/ProductWrapper.styles.scss"
import ScrollMenu from 'react-horizontal-scrolling-menu';
 
// list of items
const categoryList = [
  { name: 'all' },
  { name: 'shirts' },
  { name: 'brushs' },
  { name: 'hats' },
];

// list of items
const vendorList = [
  { name: 'all' },
  { name: 'the one museum' },
  { name: 'k-butta' },
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (categoryList, selected) =>
  categoryList.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });

 
 
class ShopPageComponent extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.categoryItems = Menu(categoryList, 'all');
    this.vendorItems = Menu(vendorList, 'all');
  }
 
  state = {
    categorySelected: '',
    vendorSelected: ''
  };
 
  onSelect = selectorType =>  key => {
    this.setState({ [selectorType]: key });
  }
 
 
  render() {
    const { categorySelected, vendorSelected } = this.state;
    // Create menu from items
    const categoryMenu = this.categoryItems;
    const vendoMenu = this.vendorItems;

    return (
      <div>
        <div className='spacer'/>
          <ScrollMenu
            data={categoryMenu}
            selected={categorySelected}
            onSelect={this.onSelect('categorySelected')}
          />
          <ScrollMenu
            data={vendoMenu}
            selected={vendorSelected}
            onSelect={this.onSelect('vendorSelected')}
          />
          <Products category={categorySelected} vendor={vendorSelected} displayAddToCartBtn={true} />
        </div>
    );
  }
}

const Shop = () => (
  <Layout useCart={true} >
    <PageLayout title="Our Products">
      <ShopPageComponent/>
    </PageLayout>
   </Layout> 
)

export default Shop
