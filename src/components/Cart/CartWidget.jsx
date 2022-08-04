import { ShoppingBagIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";

function CartWidget() {
  const { calcPriceCart } = useCartContext();
  const total = calcPriceCart()
  return (
    <div>
      <Link className="flex items-center justify-center" to="/cart">
        <ShoppingBagIcon className="h-6 w-6 text-white-500 hover:text-[red]" />
        {total != 0 &&<p className="ml-[15px] hover:text-[red]">${total  }</p>}
      </Link>
    </div>
  );
}

export default CartWidget;
