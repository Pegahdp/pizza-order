import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search order #"
        className="w-28 sm:w-64 px-4 py-2 rounded-full bg-yellow-100 text-sm transition-all duration-300 sm:focus:w-72 focus:outline-0 focus:ring-1 focus:ring-yellow-400"
      />
    </form>
  );
}
