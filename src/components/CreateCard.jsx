import React from "react";

function CreateCard({ image, title, description, price }) {
  return (
    <div className="border-[1px] border-zinc-950 p-[6px] w-[250px] flex justify-center flex-col text-center rounded-lg cursor-pointer ml-[30px] mb-[40px]">
      <div>
        <p>{price}</p>
      </div>
      <img src={image} className="w-[300px]" alt={title} />
      <div>
        <h1 className="p-[6px] text-2xl font-semibold">{title}</h1>
        <p className="opacity-55">{description}</p>
        <button className="bg-black hover:bg-black/90 transition-all duration-100 w-[200px] rounded-lg text-white p-[6px]">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default CreateCard;
