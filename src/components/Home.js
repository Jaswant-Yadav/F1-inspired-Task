import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="hero">
           <section >
        <h1>F1 Streetwear Redefined</h1>
        <p>High-performance fashion made for the streets.</p>
        <section className="categories">
        {["Tees", "Jackets", "Caps", "Accessories", "Limited"].map((cat, i) => (
          <Link key={i} to={cat === "Tees" ? "/category/tees" : "#"}>
            <button>{cat}</button>
          </Link>
        ))}
      </section>
      </section>
      
    </div>
  )
}

export default Home;