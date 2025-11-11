"use client";


import { useCart } from "@/context/CartContext";

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
interface Props {
  quantity: number;
}

export default function QuantitySelector({ quantity }: Props) {
  // const [count, setCount] = useState(quantity);
    const { count, setCount } = useCart();
  
  
  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return;
    setCount(count + value);
  };

  return (
    <div className="flex ">
      <button
        onClick={() => onQuantityChanged(-1)}
        className="  cursor-pointer"
      >
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 mt-  bg-gray-100 text-center rounded">
        {count}
      </span>
      <button
        onClick={() => onQuantityChanged(+1)}
        className="   cursor-pointer "
      >
        <IoAddCircleOutline size={30} />
      </button>

    
    </div>
  );
}
