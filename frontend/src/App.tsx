import Timer from "./components/timer/Timer";

function App() {
  return (
    <>
      <div className="draggable fixed top-0 h-10 w-screen" />
      <div className="pt-10">
        <Timer />
      </div>
    </>
  );
}

export default App;
