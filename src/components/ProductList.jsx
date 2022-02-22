import React, { Component } from "react";

class Productlist extends Component {
    
  render() {
    const { product } = this.props;
    return (
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {product.map((element) => (
           <div className="col" key={element.id} >
            <div className="card">
              <img src={element.image[0]} className="card-img-top" alt={element.title} />
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">
                {element.description.slice(0,100)}
                </p>
                <p>{element.price.prc}</p>
                <button className="btn btn-warning" id={element.barcode} onClick={this.props.openCart}>Sepete Ekle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Productlist;
