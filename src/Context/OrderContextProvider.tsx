import { ReactNode, useState } from "react"
import { Item } from "../models/item.interface"
import OrderContext from "./OrderContext" 

interface Props{
    children: ReactNode;
}
export default function OrderContextProvider({children}:Props){
    const[orders, setOrders]=useState<Item[]>([])

    function addItem(item: Item):void {
        setOrders(prev=>[...prev, item])
    }
    const removeItem = (id: string):void => {
        setOrders(prev=>prev.filter((order) => order.id !== id));
    };
    return(
        <OrderContext.Provider value={{orders, addItem, removeItem}}>{children}</OrderContext.Provider>
    )
}