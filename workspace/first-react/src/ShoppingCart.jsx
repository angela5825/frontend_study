import { useState } from "react";
import { produce } from "immer";

function ShoppingCart() {
  const [cart, setCart] = useState({
    items: [
      { id: 1, name: "Apple", quantity: 1, price: 0.99 },
      { id: 2, name: "Banana", quantity: 2, price: 1.29 },
    ],
  });

  const total = cart.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const incrementQuantity = (id) => {
    setCart(
      produce((draft) => {
        // draft에
        const item = draft.items.find((item) => item.id === id);

        // 해당 아이템 정보를 가져와서
        if (item) {
          item.quantity++;
        }
      })
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === id);

        if (item && item.quantity > 0) {
          item.quantity--;
        }
      })
    );
  };

  const removeItem = (id) => {
    setCart(
      produce((draft) => {
        const index = draft.items.findIndex((item) => item.id === id);
        if (index !== -1) {
          draft.items.splice(index, 1);
        }
      })
    );
  };

  return (
    <div>
      <h1>쇼핑 카트</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - 수량 : {item.quantity} x ${item.price}
            </span>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button onClick={() => decrementQuantity(item.id)}>-</button>
            <button onClick={() => removeItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <h2>총합 : ${total.toFixed(2)}</h2>
    </div>
  );
}

export default ShoppingCart;
