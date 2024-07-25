import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let result = "";
    let chracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw";

    if (numberAllowed) chracters += "0123456789";
    if (charAllowed) chracters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 0; i < length; i++) {
      result += chracters.charAt(Math.floor(Math.random() * chracters.length));
    }
    setPassword(result);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const passRef = useRef(null);

  const clipboardCopy = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select(); // If option added just as a safety net
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-800 px-4 py-3">
        <div className="flex flex-col items-center justify-center  gap-3 pt-8 w-full">
          <div className="text-white text-center my-3 text-2xl">
            Password generator
          </div>
          <div className="flex items-center justify-center w-full">
            <input
              type="text"
              name="text"
              className="rounded-l-md px-3 py-2 outline-none w-1/4"
              placeholder="Password"
              ref={passRef}
              readOnly={true}
              value={password}
            />
            <button
              className="bg-blue-500 text-white rounded-r-md px-4 py-2"
              onClick={clipboardCopy}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col text-sm gap-3">
            <div className="flex items-center justify-center gap-x-2">
              <input
                type="range"
                name="length"
                min={8}
                max={100}
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
                onChange={() => setNumberAllowed((prev) => !prev)} // just a good practice so that when the button is pressed too quickly ,the react can render it properly
              />
              <label htmlFor="number" className="text-white">
                Numbers
              </label>
              <input
                type="checkbox"
                name="char"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)} // just a good practice so that when the button is pressed too quickly ,the react can render it properly
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
