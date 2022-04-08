import React, { useEffect, useState } from "react";
import "./ProductList.css";
// import { getProducts } from ".";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);

  const getProducts = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      let response = await fetch("http://localhost:3000/products.json", requestOptions);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  //   let localId = JSON.parse(localStorage.getItem("productId"));

  let myCart = [];
  //   if (localId != null) {
  //     let myCart = localId;
  //   }
  const addToCart = (id) => {
    if (myCart.includes(id)) {
      alert("this product is available in the cart");
      return;
    } else {
      myCart.push(id);
      localStorage.setItem("productId", JSON.stringify(myCart));
    }
  };

  return (
    <div>
      <div className="product-container">
        {products.map((product) => {
          // const { id, title, description, brandName, thumbnailUrl, price } = product;
          return (
            <div className="product-box" key={product.id}>
              <div>
                <img src={product.thumbnailUrl} alt="product img" />
              </div>
              <div>
                <h3 className="brand-name">{product.brandName}</h3>
                <h2 className="product-name">{product.title}</h2>
                <h4 className="product-description">{product.description}</h4>
                <p className="product-price">₹{product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
