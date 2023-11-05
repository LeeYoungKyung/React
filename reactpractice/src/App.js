import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-red-200 text-2xl"> TailWind CSS 적용 </div>
      <div className="bg-red-300"> 성공! </div>
      <div className="h-96 w-96 bg-cyan-400 rounded-full pb-16">
        <div className="h-56 w-56 bg-teal-200 rounded-full place-items-center"></div>
      </div>
      <div className="bg-sky-300 text-center font-serif text-3xl">hello</div>
      <div>{counter2}</div>

      <button onClick={increase} className="bg-red-500">
        increase
      </button>
      <button onClick={decrease} className="bg-green-700">
        decrease
      </button>
    </>
  );
}

export default App;
