import React, { Component } from "react";
import Productlist from "./ProductList";
import Data from "../product";
import Cart from "./Cart";

class Product extends Component {
  state = {
    data: Data,
    width: "0px",
    filterItem: [],
    count: 1,
  };

  plusFiltered = (filterItems,countProduct) => {
    this.setState({count:countProduct})
    // let newFiltered = this.state.filterItem
    // let filter = newFiltered.filter((i) => "plus"+i.barcode === filterItems);
    // this.setState({filterItem:filter})
  };
  minusFiltered = (filterItems, countProduct) => {
    let newFiltered = this.state.filterItem;
    let filter = newFiltered.filter((i) => "minus" + i.barcode !== filterItems);
    this.setState({ count: countProduct });
    if (this.state.count < 1) {
      this.setState({ filterItem: filter });
    }
  };

  cartOpen = (e) => {
    this.setState({ width: "350px" });
    const filtered = Data.product.filter(
      (element) => element.barcode == e.target.id
    );
    if (this.state.filterItem.includes(...filtered)) {
      return;
    } else {
      this.state.filterItem.push(...filtered);
    }
    console.log(this.state.filterItem);
  };

  cartClosed = () => {
    this.setState({ width: "0px" });
  };

  render() {
    console.log(Data);
    return (
      <div className="product container mt-5">
        <Productlist
          openCart={this.cartOpen}
          product={this.state.data.product}
        />
        <Cart
          width={this.state.width}
          filtered={this.state.filterItem}
          count={this.state.count}
          plusFiltered={this.plusFiltered}
          minusFiltered={this.minusFiltered}
          closedCart={this.cartClosed}
        />
      </div>
    );
  }
}

export default Product;
