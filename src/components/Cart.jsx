import React, { useState } from "react";
import "./cart.css";
import { Clear } from "@material-ui/icons";

export default function Cart(props) {
  const [countProduct, setCountProduct] = useState(1);

  const countPlus = (e) => {
    setCountProduct(countProduct + 1);
    props.plusFiltered(e.target.id, countProduct);
  };
  const countMines = (e) => {
    if (countProduct > 1) {
      setCountProduct(countProduct - 1);
    }
    if (countProduct === 1) {
      props.minusFiltered(e.target.id, countProduct);
    }
    console.log(countProduct);
  };

  const cartDuplicate = (iBarcode) => {
    console.log(iBarcode === document.querySelector(`.${iBarcode}`).name);
    return iBarcode === document.querySelector(`.${iBarcode}`).name
    
  };

  return (
    <div className="shoppingCart" style={{ width: props.width }}>
      <div className="closedCart" onClick={props.closedCart}>
        <Clear
          style={{
            color: "red",
            width: "25px",
            backgroundColor: "wheat",
            margin: "5px",
          }}
        />
      </div>
      <table className="table">
        <thead className="text-light">
          <tr>
            <th scope="col">Resim</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        {props.filtered?.map((i, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td rowSpan="2">
                  <img
                    src={i.image[0]}
                    alt={i.title}
                    style={{ width: "50px" }}
                  />
                </td>
                <td rowSpan="2">{i.title.slice(0, 50)}</td>
                <td
                  className="text-center fw-bold"
                  style={{ borderBottom: "1px dashed white" }}
                >
                  {
                  // cartDuplicate(i.barcode) ? 
                  (i.price.prc * countProduct).toFixed(2)
                  //: i.price.prc
                  
                  }
                  TL
                </td>
              </tr>
              <tr>
                <td className="d-flex justify-content-between align-items-center">
                  <button
                    id={"minus" + i.barcode}
                    onClick={countMines}
                    className="btn btn-danger p-2 m-1 minesButton"
                  >
                    -
                  </button>
                  <p className="m-1 align-self-center">{countProduct}</p>
                  <button
                    id={"plus" + i.barcode}
                    onClick={countPlus}
                    name={i.barcode}
                    className={"btn btn-success p-2 m-1 " + i.barcode}
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
