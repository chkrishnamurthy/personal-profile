import "./App.css";
import NavBar from "./Components/NavBar";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <div class="min-h-screen bg-[#1E2B3B]">
      <NavBar />
      <div className="p-3 w-8/12 m-auto">
        <Introduction />
      </div>
    </div>
  );
}

export default App;
