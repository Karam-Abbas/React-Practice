import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Lower, Upper, updateName } from "./features/name/nameSlice";
import { useState } from "react";

function App() {
  const name = useSelector((state) => state.name.name);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(name);
  const handler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Variable currently has "{name}" in it</h1>
        <input type="text" value={username} onChange={handler} />
        <button onClick={() => dispatch(Upper())}>UpperCase</button>
        <button onClick={() => dispatch(Lower())}>LowerCase</button>
        <button onClick={() => dispatch(updateName(username))}>
          UpdateValue
        </button>
      </div>
    </>
  );
}

export default App;
