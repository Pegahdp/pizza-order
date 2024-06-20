import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="bg-stone-800 px-4 py-4 flex justify-between items-center sm:px-6 text-stone-200 uppercase text-sm md:tex-base">
      <p className="text-stone-300 space-x-4 sm:space-x-6 font-semibold">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
