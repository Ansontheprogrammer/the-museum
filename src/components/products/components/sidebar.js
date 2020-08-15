import Sidebar from "react-sidebar";
import React, { useState } from 'react'
import { formatPrice } from "./productCard";
import { Link } from "gatsby";

export const SideBar = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    let total = 0;
    const openOverlayStyle = {
        overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            zIndex: 1,
            position: "absolute",
            visibility: "hidden",
            transition: "opacity .3s ease-out, visibility .3s ease-out",
            backgroundColor: "rgba(0,0,0,.3)"
        },
        sidebar: {
          background: "white", 
        }
    }

    const closedOverlayStyles = {
        overlay: {
            top: 'revert',
            left: 'revert',
            right: 'revert',
            bottom: 'revert',
            opacity: 'revert',
            zIndex: 'revert',
            position: "revert",
            visibility: "revert",
            transition: "opacity .3s ease-out, visibility .3s ease-out",
            backgroundColor: "rgba(0,0,0,.3)"
        },
        sidebar: {
          background: "black", 
        }
    }

    const getOverlayStyles = () => props.showCheckoutComponent ? closedOverlayStyles : openOverlayStyle

    const Products = props.products.map(product => {
      total += parseInt(product._price)
      return (
        <div style={{display: 'block'}}>
          <div style={{padding: '15px', paddingBottom: '20px'}}>
            { product.images &&
              <img style={{height: '150px', width:'150px'}} src={product.images[0].originalSrc}/>
            }
            <p>{product.title}</p>
            <p>{formatPrice(product._price)}</p>
          </div>
        </div>
      )
    }).map(jsx => jsx)
    return (
      <Sidebar
        sidebar={
          <div style={{textAlign: 'center'}}>
            <p style={{paddingTop: '20px', fontSize: '22px'}}>Products</p>
            {Products}
            <p style={{paddingTop: '16px', paddingBottom: '16px', fontSize: '22px'}}>Total: {formatPrice(total)}</p>
              <Link to='/checkout/'>
                <button style={{marginBottom: '20px'}}>Go to Checkout</button>
              </Link>
           
          </div>
        }
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        styles={{ 
            sidebar: { 
                ...getOverlayStyles().sidebar,
                background: 'white',
                minWidth: '50%', 
                zIndex: 100,
                position: "fixed",
                top: 0,
                bottom: 0,
                transition: "transform .3s ease-out",
                WebkitTransition: "-webkit-transform .3s ease-out",
                willChange: "transform",
                overflowY: "auto"
            },
            root: {
                position: "absolute",  
                top: 'revert',
                left: 'revert',
                right: 'revert',
                bottom: 'revert',
                overflow: "hidden"
                
              },
              content: {
                position: "fixed",
                top: 'revert',
                left: 'revert',
                right: 'revert',
                bottom: 'revert',
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                transition: "left .3s ease-out, right .3s ease-out"
              },
              overlay: {
                ...getOverlayStyles().overlay,   
            },
              dragHandle: {
                zIndex: 1,
                position: "fixed",
                top: 0,
                bottom: 0
              }
        }}
      >
        <button className='sidebar-btn' onClick={() => {
          props.toggleCheckoutComponent();
          setSidebarOpen(!sidebarOpen)
        }}>
          {!sidebarOpen ? 'Checkout' : 'Close'}
        </button>
      </Sidebar>
    )
  }