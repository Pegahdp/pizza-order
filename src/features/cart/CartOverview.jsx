function CartOverview() {
  return (
    <div className="bg-stone-800 px-4 py-4 flex justify-between items-center sm:px-6 text-stone-200 uppercase text-sm md:tex-base">
      <p className="text-stone-300 space-x-4 sm:space-x-6 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
