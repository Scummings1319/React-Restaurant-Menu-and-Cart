import { createContext } from "react";
import { Item } from "../models/item.interface";

interface OrderContextModel {
  orders: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}
const defaultValue: OrderContextModel = {
  orders: [],
  addItem: (item: Item) => {},
  removeItem: (id: string) => {},
};
const OrderContext = createContext(defaultValue);
export default OrderContext;
