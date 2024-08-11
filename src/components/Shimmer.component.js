const ShimmerComponent = () =>(
    <div className="border-2 rounded-3xl bg-gray-200 m-2 pb-4">
      <div className="rounded-3xl h-[350px] w-[300px] bg-gray-300"></div>
      <div className="flex flex-col px-4 gap-1 mt-2">
        <div className="flex justify-between"> 
                <p className="w-24 h-5 bg-gray-300"></p>                 
                <p className="w-24 h-5 bg-gray-300"></p>                 
        </div>
        <p className="w-24 h-5 bg-gray-300"></p>                 
        <p className="w-24 h-5 bg-gray-300"></p>                 
      </div>
   </div>
)

export default ShimmerComponent;