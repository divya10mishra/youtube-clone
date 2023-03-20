import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div class="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body;
