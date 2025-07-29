import { useState } from 'react';

const allProducts = [
  { id: 1, name: "Speed Tee", price: 49 },
  { id: 2, name: "Grid Tee", price: 59 },
];

export default function ProductList() {
  const [query, setQuery] = useState("");

  const filtered = allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='all-product'>
      <input
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p>No products match your search.</p>
      ) : (
        <ul>
          {filtered.map(p => <li key={p.id}>{p.name} - ${p.price}</li>)}
        </ul>
      )}
    </div>
  );
}