import React from "react";
import { useSelector } from "react-redux";

function Another() {
  const name = useSelector((state) => state.name.name);
  return (
    <div> Value checking in "Another" Component : {name}</div>
  );
}

export default Another;
