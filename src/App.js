import "./App.css";
import NavBar from "./Components/NavBar";
import Introduction from "./Components/Introduction";
import Content from "./Components/Content";

function App() {
  return (
    <div class="min-h-screen bg-[#1E2B3B] font-sans">
      <NavBar />
      <div className="p-3 w-8/12 m-auto">
        <Introduction />
        <Content />
      </div>
    </div>
  );
}

export default App;
