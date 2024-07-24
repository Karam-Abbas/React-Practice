import React from "react";

function Card({name = "johndoe",work="West"}) {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 text-white">
        <img
         className="w-36 h-36 rounded-full mx-auto object-cover overflow-hidden"
          src="https://images.pexels.com/photos/26088418/pexels-photo-26088418/free-photo-of-a-woman-in-a-black-dress-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              temporibus.
            </p>
          </blockquote>
          <figcaption>
            <div>{name}</div>
            <div>{work}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Card;
