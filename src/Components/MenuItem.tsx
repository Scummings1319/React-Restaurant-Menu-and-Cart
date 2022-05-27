import { useContext } from "react";
import OrderContext from "../Context/OrderContext";
import { Item } from "../models/item.interface";
import "./MenuItem.css";

interface menuItemProps {
  item: Item;
}

export default function MenuItem({ item }: menuItemProps) {
  const { orders, addItem, removeItem } = useContext(OrderContext);
  return (
    <div className="eachItem">
      <p className="itemName">item: {item.name}</p>
      <p> Description: {item.description}</p>
      <p>Price: {item.price}</p>
      <p>{item.vegetarian === true ? "Vegetarian" : "not Vegetarian"}</p>
      <p>Calories: {item.calories}</p>
      <button
        onClick={(e) => {
          addItem(item);
        }}
      >
        Add to order
      </button>
      {orders.findIndex((order) => order.id === item.id) < 0 || (
        <button
          onClick={(e) => {
            removeItem(item.id);
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
}
