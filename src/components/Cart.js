import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Speed Tee", price: 49, qty: 1 },
    { id: 2, name: "Grid Tee", price: 59, qty: 1 },
  ]);

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, qty: Math.max(item.qty + delta, 1) } : item)
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.qty}
          <button onClick={() => updateQty(item.id, -1)}>-</button>
          <button onClick={() => updateQty(item.id, 1)}>+</button>
        </div>
      ))}
      <p>Subtotal: ${subtotal}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}