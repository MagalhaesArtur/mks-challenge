import Skeleton from "react-loading-skeleton";

function SkeletonModel() {
  return (
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
  );
}

export default SkeletonModel;
