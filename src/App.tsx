import React from "react";
import Header from "./Components/Header";

import "./App.css";
import MenuList from "./Components/MenuList";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuList />
      <SideBar />
    </div>
  );
}

export default App;
