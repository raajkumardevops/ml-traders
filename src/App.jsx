import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import ProductDetails from "./ProductDetails";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
