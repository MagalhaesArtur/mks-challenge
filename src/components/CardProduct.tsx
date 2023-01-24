import { Button } from "@mui/material";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductSlice } from "../features/products/products-slice";
import { useDispatch } from "react-redux";
import { increment } from "../features/itemsOnSupermarketCart/counter-slice";

function CardProduct(product: { data: ProductSlice; loading: boolean }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <SkeletonTheme baseColor="#cec1c1" highlightColor="#fff">
      {!product.loading ? (
        <div className="w-64 min-h-72  gap-2 bg-white rounded-lg !font-montserrat shadow-shadowzin items-center justify-between flex flex-col">
          <div className=" gap-2  rounded-lg py-3  font-montserrat px-6 items-center justify-center flex flex-col">
            {
              <img
                className="w-40"
                src={product.data.photo}
                alt={product.data.name}
              />
            }

            <div className="flex w-full mb-2 items-center justify-between ">
              <h1 className="font-normal">{product.data.name}</h1>
              <div className="bg-[#373737]  p-2 rounded-lg text-white font-bold">
                <h2>R${product.data.price.slice(0, -3)}</h2>
              </div>
            </div>
            <div>
              <p className="font-light text-sm">{product.data.description}</p>
            </div>
          </div>
          <Button
            onClick={handleClick}
            className=" "
            style={{
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              width: "100%",
              height: 31,
              backgroundColor: "#0F52BA",
              padding: "18px 36px",
              color: "#fff",
              fontSize: "18px",
            }}
            variant="contained"
          >
            <div className="flex font-semibold text-sm items-center gap-4 justify-center">
              <LocalMallOutlinedIcon className="text-white" />
              <h2>Comprar</h2>
            </div>
          </Button>
        </div>
      ) : (
        <div className="w-64 h-96  gap-2 bg-white rounded-lg !font-montserrat shadow-shadowzin items-center justify-between flex flex-col">
          <div className=" gap-2  rounded-lg py-3  font-montserrat px-6 items-center justify-center flex flex-col">
            <Skeleton height={125} width={125} circle={true} />
            <div className="flex w-full mt-4 mb-2 items-center justify-between ">
              <div className="flex flex-col mr-7">
                <Skeleton width={100} count={1} />
                <Skeleton width={100} count={1} />
              </div>
              <Skeleton width={60} height={40} count={1} />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton width={200} count={1} />
              <Skeleton width={200} count={1} />
            </div>
          </div>
        </div>
      )}
    </SkeletonTheme>
  );
}

export default CardProduct;
