import CircularProgress from "./components/custom/CircularProgress";

function App() {
  return (
    <div>
      <div className="h-8 draggable" />
      <CircularProgress percentage={67} text="aaa" />
    </div>
  );
}

export default App;
