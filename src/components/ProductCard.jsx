import { Link } from "react-router-dom";
import "../styles/productCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
