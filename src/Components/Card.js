import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, productname, quantity, image }) => {
  const [Quantity, setQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setQuantity(parseInt(Quantity) + 1);
  };

  const decreaseQuantity = () => {
    if (parseInt(Quantity) > 0) {
      setQuantity(parseInt(Quantity) - 1);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{productname}</h3>
        <div className="quantity-control">
          <button className="quantity-button" onClick={decreaseQuantity}>
            -
          </button>
          <p className="card-quantity">{Quantity}Kg in stock</p>
          <button className="quantity-button" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <Link to="/" className="heading">
          <button className="update-button">Update Stock</button>
        </Link>
      </div>
      <img src={image} alt={productname} />
    </div>
  );
};

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios.get("https://adminlm.onrender.com/api/product/")
      .then(response => {
        console.log(response.data);
        setCardsData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="cards">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          productname={card.productname}
          quantity={card.quantity}
        />
      ))}
    </div>
  );
};

const Last = () => {
  return (
    <div className="container-main">
      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;
