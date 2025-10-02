// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
}
