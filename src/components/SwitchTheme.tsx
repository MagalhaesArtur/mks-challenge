import { Button } from "@mui/material";
import { MoonStars } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../features/SwitchTheme/switch-theme-slice";
import { RootState } from "../store";

export function SwitchTheme() {
  const isDarkTheme = useSelector((state: RootState) => {
    return state.SwitchTheme.isDarkMode;
  });
  console.log(isDarkTheme);

  const dispatch = useDispatch();

  return (
    <div
      className={`
           rounded-[50%] transition-all  bg-slate-800  `}
      id="themeSwitch"
      title="Trocar Tema"
    >
      <Button
        onClick={() => {
          dispatch(switchMode());
        }}
        className=" flex  w-full h-full   !rounded-[50%] items-center justify-center"
      >
        <MoonStars size={50} color="#19ccc0" />
      </Button>
    </div>
  );
}
