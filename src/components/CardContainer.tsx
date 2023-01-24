import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { ProductSlice } from "../features/products/products-slice";
import CardProduct from "./CardProduct";
import { useEffect, useState } from "react";
import { changeToFalse } from "../features/isSidebarOpen/sideBar-slice";

function CardContainer() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const products: ProductSlice[] = useSelector((state: RootState) => {
    return state.allProducts.products;
  });

  useEffect(() => {
    if (products.length == 0) {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [products]);

  return (
    <div
      onClick={() => {
        dispatch(changeToFalse());
      }}
      className="w-[70%] mb-10 min-h-[600px] grid grid-rows-2 grid-flow-col gap-4"
    >
      {products.map((product) => (
        <CardProduct key={product.id} loading={loading} data={product} />
      ))}
    </div>
  );
}

export default CardContainer;
