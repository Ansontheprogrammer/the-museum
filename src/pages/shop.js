import React, { Component } from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import "../components/products/styles/ProductWrapper.styles.scss"
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { SpacingSm } from "../components/typographics"
 
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
// const MenuItem = ({text, selected}) => {
//   return <div
//     className={`menu-item ${selected ? 'active' : ''}`}
//     >{text}</div>;
// };
 
// All items component
// Important! add unique key
// export const Menu = (categoryList, selected, alignment) =>
//   categoryList.map(el => {
//     const {name} = el;
 
//     return <MenuItem text={name} key={name} selected={selected} alignment={alignment} />;
//   });

 
 
class ShopPageComponent extends Component {
  constructor(props) {
    super(props);
  }
 
  state = {
    categorySelected: '',
    vendorSelected: ''
  };
 
  onSelect = (selectorType) =>  key => () => {
    this.setState({ [selectorType]: key });
  }
 
  generateButtonList(list, selectorName){
    return list.map(btn => {
            return <button onClick={this.onSelect(selectorName)(btn.name)}>{btn.name}</button>
          })
          .map(jsx => jsx)
  }
 
  render() {
    const { categorySelected, vendorSelected } = this.state;
    // Create menu from items
    const CategoryMenu = this.generateButtonList(categoryList, 'categorySelected');
    const VendorMenu = this.generateButtonList(vendorList, 'vendorSelected');

    return (
      <div>
        <div className='spacer'/>
          <div className='top-category-menu'>
            {CategoryMenu}
          </div>
          <div className='left-category-menu'>
            {VendorMenu}
          </div>
          <SpacingSm/>
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
