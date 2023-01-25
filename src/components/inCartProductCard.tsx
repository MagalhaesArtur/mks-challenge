import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  ProductSlice,
} from "../features/itemsOnSupermarketCart/products-slice";

import {
  incrementCounter,
  decrementCounter,
} from "../features/itemsOnSupermarketCart/counter-slice";
import { RootState } from "../store";

function InCartProductCard(product: { data: ProductSlice }) {
  const isSidebarOpen = useSelector((state: RootState) => {
    return state.isSidebarOpenState;
  });

  const dispatch = useDispatch();

  return (
    <div
      className={`w-[90%]  px-5 py-2  rounded-lg gap-4 mt-8 flex justify-between items-center bg-white h-24 `}
    >
      <img src={product.data.photo} className="w-16" alt={product.data.name} />
      <h2 className="font-normal max-w-[60px] text-[13px]">
        {product.data.name}
      </h2>
      <div className="flex flex-col">
        <p className="text-[9px]  font-normal">Qtd:</p>

        <div className="flex flex-col rounded-lg border-[1px] border-slate-500 items-center">
          <div className="w-[80px] flex justify-center gap-2 items-center">
            <button
              onClick={() => {
                dispatch(decrement(product.data));
                dispatch(decrementCounter());
              }}
              className="hover:bg-blue-500 transition-all w-6 rounded-l-lg"
            >
              -
            </button>

            <div className="w-[1px] h-[15px] bg-slate-500"></div>
            {product.data.counter}
            <div className="w-[1px] h-[15px] bg-slate-500"></div>

            <button
              onClick={() => {
                dispatch(increment(product.data));
                dispatch(incrementCounter());
              }}
              className="hover:bg-blue-500 transition-all w-6 rounded-r-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <h2 className="flex items-center font-bold text-base gap-2">
        R$ {Number(product.data.price.slice(0, -3)) * product.data.counter}
      </h2>
    </div>
  );
}

export default InCartProductCard;
