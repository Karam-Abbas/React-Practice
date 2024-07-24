import "./App.css";
import {useState} from 'react'
function App() {
const [color , setColor] = useState("olive");
// One Way of doing it
// const colorRed = () => {
//   setColor("red");
// }
// const colorGreen = () => {
//   setColor("green");
// }
// const colorBlue = () => {
//   setColor("blue");
// }

//Another way of doing it

// you can also do this :- bg-${color}
//you can directly use the setColor instead of callback
// const changeColor = (color)=>{
//   setColor(color);
// };

  return (<>
  <div className="text-white w-full h-screen flex items-center justify-center" style={{backgroundColor:color}}>
    <div className="flex-wrap items-center justify-center rounded-full bg-white shadow-black shadow-sm fixed bottom-12">
    <button className="bg-red-500 rounded-full px-2 py-1 mx-1 my-1" onClick={()=>setColor("red")}>Red</button>
    <button className="bg-green-500 rounded-full px-2 py-1 mx-1 my-1" onClick={()=>setColor("green")}>Green</button>
    <button className="bg-blue-500 rounded-full px-2 py-1 mx-1 my-1" onClick={()=>setColor("blue")}>Blue</button>
    <button className="bg-yellow-500 rounded-full px-2 py-1 mx-1 my-1" onClick={()=>setColor("yellow")}>Yellow</button>
    <button className="bg-pink-500 rounded-full px-2 py-1 mx-1 my-1" onClick={()=>setColor("pink")}>Pink</button>
    </div>
  </div>
  </>);
}

export default App;
