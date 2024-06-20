import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 rounded-full text-sm text-stone-800 hover:bg-yellow-300  uppercase font-semibold tracking-wide focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-2 py-2 text-xs md:px-5 md:py-2.5",
    rounded: base + " px-2.5 py-1 text-xs md:px-3.5 md:py-2 text-sm",
    secondary:
      "bg-transparent text-sm border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3 rounded-full text-stone-400 hover:bg-stone-300 hover:text-stone-800 uppercase font-semibold tracking-wide focus:text-stone-800  focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:bg-stone-300 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
