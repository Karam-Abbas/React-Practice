import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-slate-800 px-4 py-3">
        <div className="flex flex-col items-center justify-center  gap-3 pt-8">
          
            <div className="text-white text-center my-3 text-2xl">
              Password generator
            </div>
            <div>
            <input
              type="text"
              name="text"
              className="rounded-l-full px-8 py-2 outline-none "
            />
          <button className="bg-blue-500 text-white rounded-r-full px-4 py-2">
            Copy
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
