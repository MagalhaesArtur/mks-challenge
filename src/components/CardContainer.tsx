import { RootState } from "../store";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import { useEffect, useState } from "react";
import { ProductSlice } from "../features/itemsOnSupermarketCart/products-slice";

function CardContainer() {
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
    <div id="gridContainer" className="w-[70%] mb-20 mt-20 min-h-[600px] ">
      {products.map((product) => (
        <CardProduct key={product.id} loading={loading} data={product} />
      ))}
    </div>
  );
}

export default CardContainer;
