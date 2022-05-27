import { useContext } from "react";
import OrderContext from "../Context/OrderContext";
import { Item } from "../models/item.interface";
import "./SideBar.css";

export default function SideBar() {
  const { orders } = useContext(OrderContext);

  function total(orders: Item[]) {
    let totalValue = `$` + 0;
    for (const order of orders) {
      totalValue += order.price;
    }
    return totalValue;
  }

  return (
    <div className="sidebar">
      <ol>
        {orders.map((order, index) => (
          <li className="sidebarItems">
            {order.name}- {order.price}
          </li>
        ))}
      </ol>
      <p>Total: {total(orders)}</p>
    </div>
  );
}
