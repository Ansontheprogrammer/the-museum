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
    this.onSelect = this.onSelect.bind()
  }
  toggleSelectorMenus = (selector, value) => {
    return () => {
    this.setState({
      selectors : {
        ...this.state.selectors,
        [selector] : !this.state[selector]
      }
      })
    }
  }
  selectors = {
    category: {
      displayedMenu: this.generateButtonList(categoryList, 'categorySelected'),
      nonDisplayed: <button onClick={this.toggleSelectorMenus('category')}>Show Category Menu</button>
    },
    vendor : {
      displayedMenu: this.generateButtonList(vendorList, 'vendorSelected'),
      nonDisplayed: <button onClick={this.toggleSelectorMenus('vendor')}>Switch Vendors</button>
    } 
  }

  state = {
    categorySelected: '',
    vendorSelected: '',
    selectors: {
      category: false,
      vendor: false,
    }
  };
 
  onSelect = (selectorType) => {
    const findIfAnyOtherTogglesAreSelected = Object.keys(this.state.selectors).find(selector => this.state.selectors[selector])

   return (e) => {
     const findIfAnyOtherTogglesAreSelected = Object.keys(this.state.selectors).find(selector => this.state.selectors[selector])
     if(findIfAnyOtherTogglesAreSelected){
      this.setState({ 
        [selectorType.selectorName]: selectorType.btnName,
        [findIfAnyOtherTogglesAreSelected] : !this.state.selectors[findIfAnyOtherTogglesAreSelected]
      });
     } else {
      this.setState({ 
        [selectorType.selectorName]: selectorType.btnName,
       });
     }
   }
  }
 
  generateButtonList(list, selectorName){
    return list.map(btn => {
      return <button >{btn.name}</button>
    })
    .map(jsx => jsx)
  }
 
  render() {
    const { categorySelected, vendorSelected } = this.state;
    // Create menu from items
    
    return (
      <div>
        <div className='spacer'/>
          <div className='top-category-menu'>
            {this.state.selectors.category ? (
              <>
              {this.selectors.category.displayedMenu}
              </>
            ): (
            <>
              {this.selectors.category.nonDisplayed}
            </>)}
          </div>
          <div className='left-category-menu'>
          {this.state.selectors.vendor ? (
              <>
              {this.selectors.vendor.displayedMenu}
              </>
            ): (
            <>
              {this.selectors.vendor.nonDisplayed}
            </>)}
          </div>
          <SpacingSm/>
          <Products category={categorySelected} vendor={vendorSelected} displayAddToCartBtn={true} />
          <SpacingSm/>
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
