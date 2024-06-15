import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 border-b border-stone-200 px-4 sm:px-6 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Pizza App Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
