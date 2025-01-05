import React from "react";

function Card({ username, btnText = "Visit me" }) {
  console.log(username);
  return (
    <div className="w-60 bg-[url('https://images.pexels.com/photos/28318334/pexels-photo-28318334/free-photo-of-a-sign-on-a-rocky-path-leading-to-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
      <div className="col-span-2 text-lg font-bold capitalize rounded-md bg-white/70 p-1">
        {username}
      </div>
      <div className="col-span-2 rounded-md bg-white/70 p-2">
        Using Lorem ipsum to focus attention on graphic elements in a webpage
        design proposal · One of the earliest examples of the Lorem ipsum
        placeholder text on 1960s advertising.
      </div>
      <div className="col-span-1">
        <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
          {btnText}->
        </button>
      </div>
    </div>
  );
}

export default Card;
