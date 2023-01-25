import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  decrement,
  increment,
  ProductSlice,
} from "../features/itemsOnSupermarketCart/products-slice";
import {
  incrementCounter,
  decrementCounter,
} from "../features/itemsOnSupermarketCart/counter-slice";

function CardProductInCart(product: { data: ProductSlice }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`w-[90%]  px-5 py-2 relative rounded-lg gap-4 mt-8 flex justify-between items-center bg-white h-24 `}
    >
      <button
        onClick={() => {
          for (let i = 0; i < product.data.counter; i++) {
            dispatch(decrement(product.data));
            dispatch(decrementCounter());
          }
        }}
        className=" w-6 h-6 absolute -right-[5px] -top-[5px] bg-black hover:!text-red-600 text-red-400 transition-all rounded-full"
      >
        <CloseIcon fontSize={"small"} />
      </button>
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

export default CardProductInCart;
