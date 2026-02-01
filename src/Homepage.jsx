import React from "react";
import { useNavigate, Link } from "react-router-dom";
import products from "./products";
import "./homepage.css";


export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">

      {/* TOP HEADER */}
      <header className="header">
        <div className="header-left">ML Traders Textiles</div>

        <nav className="header-right">
           <Link to="/">Home</Link>
  <Link to="/about">About Us</Link>
  <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      {/* SECOND NAV BAR */}
      <div className="second-nav">
        <a href="#men">Menswear</a>
        <a href="#women">Women</a>
        <a href="#boys">Kids</a>
      </div>

      {/* MEN SECTION */}
      <section className="section" id="men">
        <h2>Men Collections</h2>

        <div className="grid">
          {products
            .filter((p) => p.category === "men")
            .map((p) => (
              <div
                key={p.id}
                className="card"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <span className="sale-tag">Sale</span>
                <img src={p.images[0]} alt={p.name} />
                <div className="card-title">{p.name}</div>
                <div className="price">₹{p.price}</div>
              </div>
            ))}
        </div>
      </section>

      {/* WOMEN SECTION */}
      <section className="section" id="women">
        <h2>Women Collections</h2>

        <div className="grid">
          {products
            .filter((p) => p.category === "women")
            .map((p) => (
              <div
                key={p.id}
                className="card"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <span className="sale-tag">Sale</span>
                <img src={p.images[0]} alt={p.name} />
                <div className="card-title">{p.name}</div>
                <div className="price">₹{p.price}</div>
              </div>
            ))}
        </div>
      </section>

      {/* BOYS SECTION */}
      <section className="section" id="boys">
        <h2>Boys Collections</h2>

        <div className="grid">
          {products
            .filter((p) => p.category === "boys")
            .map((p) => (
              <div
                key={p.id}
                className="card"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <span className="sale-tag">Sale</span>
                <img src={p.images[0]} alt={p.name} />
                <div className="card-title">{p.name}</div>
                <div className="price">₹{p.price}</div>
              </div>
            ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        MLTraders2909 © 2025
      </footer>

    </div>
  );
}
