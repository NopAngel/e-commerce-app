import React from "react";

function CreateCardShow({ image, title, price }) {
  return (
    <div className="text-center w-[200px] border-[1px] border-zinc-600 text-black rounded-lg cursor-pointer hover:translate-y-[10px] transition-all duration-75 shadow-sm ml-[80px] mb-[20px] flex justify-center flex-col items-center">
      <p className="p-[6px] opacity-60 text-green-600 ">{price}</p>
      <img
        src={image}
        className="hover:translate-y-[6px] transition-all duration-150 hover:shadow-sm"
        width={300}
        alt=""
      />
      <div>
        <h1 className="text-1xl font-bold mb-[20px]">{title}</h1>
      </div>
    </div>
  );
}

export default CreateCardShow;
