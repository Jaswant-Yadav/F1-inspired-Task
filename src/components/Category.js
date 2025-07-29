import { Link, useNavigate } from 'react-router-dom';
import speed from '../Speed Tee.webp'
import Grid from '../Grid Tee.webp'

const products = [
  { id: 1, name: "Speed Tee", price: 49, image: speed },
  { id: 2, name: "Grid Tee", price: 59, image: Grid },
];

export default function Category() {
  const navigate = useNavigate();

  return (
    <div className='product-category'>
        <div className="navbar-box">
        <nav className="navbar">
          <Link to="/cart" className="navbar-link">Cart</Link>
        </nav>
      </div>
      <h2>Tees Collection</h2>
      <div className="grid">
        {products.map(p => (
          <div key={p.id} onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
}