import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

export default function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button onClick={() => dispatch(decreaseItemQuantity(id))} type="rounded">
        -
      </Button>
      <span className="text-sm font-medium mx-0.5">{currentQuantity}</span>
      <Button onClick={() => dispatch(increaseItemQuantity(id))} type="rounded">
        +
      </Button>
    </div>
  );
}
