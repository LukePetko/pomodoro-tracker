import Settings from "./components/settings/Settings";
import Timer from "./components/timer/Timer";
import { notify } from "./lib/notifications";

function App() {
  console.log(import.meta.env.VITE_APP_TYPE);
  notify("Hello", "World");
  return (
    <>
      <div className="draggable fixed top-0 flex h-10 w-screen justify-end p-3">
        <Settings />
      </div>
      <div className="pt-10">
        <Timer />
      </div>
    </>
  );
}

export default App;
