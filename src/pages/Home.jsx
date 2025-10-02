// src/pages/Home.jsx
import ProductList from "../components/ProductList";
import "../styles/home.css";

export default function Home({ searchQuery }) {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to MyStore</h1>
        <p>Find the best products at the best prices</p>
      </section>
      <section className="products-section">
        <h2>Featured Products</h2>
        <ProductList limit={10} searchQuery={searchQuery} />
      </section>
    </div>
  );
}
