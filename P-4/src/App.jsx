import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

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
              className="rounded-l-md px-3 py-2 outline-none"
              placeholder="Password"
              readOnly={true}
              value={password}
            />
            <button className="bg-blue-500 text-white rounded-r-md px-4 py-2">
              Copy
            </button>
          </div>
          <div className="flex flex-col text-sm gap-3">
            <div className="flex items-center justify-center gap-x-2">
              <input
                type="range"
                name="length"
                min={8}
                max={16}
                value={length}
                className="p-0 mt-3 cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length" className="text-orange-500 ml-2 mt-3">
                Length : {length}
              </label>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <input
                type="checkbox"
                name="number"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="number" className="text-white">
                Numbers
              </label>
              <input
                type="checkbox"
                name="char"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="char" className="text-white">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
