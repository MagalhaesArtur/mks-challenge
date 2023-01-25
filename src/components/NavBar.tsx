import RealSideBar from "./Sidebar/RealSideBar";

function NavBar() {
  return (
    <nav className="bg-azulzin-500 w-full relative h-[101px]  text-white  flex justify-around  items-center font-montserrat">
      <div className="flex gap-3 items-end ">
        <h1 className="text-[30px] mb-0 font-semibold">MKS</h1>
        <h2 className="text-xl mb-1 font-light ">Sistemas</h2>
      </div>
      <RealSideBar />
    </nav>
  );
}

export default NavBar;
