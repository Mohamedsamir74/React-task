import ProductList from "../components/ProductList";
import "../styles/products.css";

export default function Products({ searchQuery }) {
  return (
    <div className="products-page">
      <h2>All Products</h2>
      <ProductList searchQuery={searchQuery} />
    </div>
  );
}
