// src/ProductDetails.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "./products";
import "./productdetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const [imgIndex, setImgIndex] = useState(0);
  const [size, setSize] = useState(product?.sizes?.[0] ?? "");

  if (!product) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Product not found</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  const next = () => setImgIndex((s) => (s + 1) % product.images.length);
  const prev = () => setImgIndex((s) => (s - 1 + product.images.length) % product.images.length);

  return (
    <div className="pd-root">
      <div className="pd-top">
        <button className="pd-back" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="pd-wrap glass">
        <div className="pd-left">
          <div className="pd-slider">
            <img className="pd-main-img" src={product.images[imgIndex]} alt={`${product.name} ${imgIndex}`} />
            <button className="pd-arrow pd-prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="pd-arrow pd-next" onClick={next} aria-label="Next">›</button>
          </div>

          <div className="pd-thumb-row">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`pd-thumb ${i === imgIndex ? "active" : ""}`}
                onClick={() => setImgIndex(i)}
                alt={`${product.name} thumb ${i}`}
              />
            ))}
          </div>
        </div>

        <div className="pd-right">
          <h1 className="pd-name">{product.name}</h1>
          <div className="pd-price">₹ {product.price.toLocaleString()}</div>

          <label className="pd-label">Select Size</label>
          <select className="pd-select" value={size} onChange={(e) => setSize(e.target.value)}>
            {product.sizes.map((s, i) => <option key={i} value={s}>{s}</option>)}
          </select>

          <div className="pd-actions">
            <button className="pd-add">Add to Cart</button>
            <button className="pd-buy">Buy Now</button>
          </div>

          <div className="pd-desc">
            <h3>Product Details</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
