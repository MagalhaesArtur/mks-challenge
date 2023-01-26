import { Button } from "@mui/material";
import { SkeletonTheme } from "react-loading-skeleton";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { incrementCounter } from "../../features/itemsOnSupermarketCart/counter-slice";
import SkeletonModel from "../SkeletonModel";
import {
  ProductSlice,
  setProductOnCart,
} from "../../features/itemsOnSupermarketCart/products-slice";
import { useState } from "react";
import SnackBar from "../SnackBar";
import { RootState } from "../../store";

export default function CardProduct(product: {
  data: ProductSlice;
  loading?: boolean;
}) {
  const dispatch = useDispatch();

  const isDarkTheme = useSelector((state: RootState) => {
    return state.SwitchTheme.isDarkMode;
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = (product: ProductSlice) => {
    dispatch(incrementCounter());
    dispatch(setProductOnCart({ ...product, counter: 1 }));
  };

  return (
    <SkeletonTheme baseColor="#cec1c1" highlightColor="#fff">
      {!product.loading ? (
        <div
          id="loadingAux"
          className={`w-64 min-h-72  gap-2 ${
            isDarkTheme
              ? "bg-slate-900 shadow-shadowzin2"
              : "bg-white shadow-shadowzin"
          }  transition-all rounded-lg !font-montserrat   items-center justify-between flex flex-col`}
        >
          <SnackBar open={openSnackbar} setOpen={setOpenSnackbar} />
          <div
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            }  gap-2  rounded-lg py-3 transition-all  font-montserrat px-6 items-center justify-center flex flex-col`}
          >
            {
              <img
                className="w-40 rounded-xl"
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

          {loading ? (
            <LoadingButton
              style={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                width: "100%",
                height: 30,
                backgroundColor: "#0F52BA",
                padding: "18px 36px",
                color: "#fff",
                fontSize: "18px",
              }}
              loading
              color="success"
              variant="outlined"
            ></LoadingButton>
          ) : (
            <Button
              data-testid="addItemToCart"
              onClick={() => {
                setLoading(true);
                handleClick(product.data);
                setTimeout(() => {
                  setOpenSnackbar(true);
                  setLoading(false);
                }, 1000);
              }}
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
          )}
        </div>
      ) : (
        <SkeletonModel />
      )}
    </SkeletonTheme>
  );
}
