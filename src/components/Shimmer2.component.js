const Shimmer2Component = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="w-2/4 border-2 p-8 shadow-lg rounded-3xl  bg-slate-200">
        <h1 className="h-5 w-28   bg-gray-300"></h1>
        <div className="border-none rounded-b-3xl h-52 mt-8 w-full relative ps-4 pb-4 pe-4 box-border bg-slate-100">
          <div className="font-bold absolute p-4 top-0 border-2 w-[calc(100%-2rem)] h-[calc(100%-1rem)] bg-white rounded-2xl">
            <div className="mb-2"></div>
            <p className="h-5 w-40  mb-2 bg-gray-300"></p>
            <p className="h-5 w-40  mb-2  bg-gray-300"></p>
            <p className="h-5 w-40  mb-2 bg-gray-300"></p>
            <hr></hr>
            <p className="h-5 w-40   bg-gray-300"></p>
          </div>
        </div>

        <h1 className="h-5 w-40   bg-gray-300 mt-4"></h1>
        <div className="flex w-full gap-3 mt-4">
          <div className="w-1/3 h-16 rounded-2xl border-2 p-2 bg-slate-50">
            <p className="h-5 w-40   bg-gray-300 mb-2"></p>
            <p className="h-5 w-40   bg-gray-300"></p>
          </div>
        </div>

        <div className="mt-8 w-full"></div>
      </div>
    </div>
  );
};

export default Shimmer2Component;
