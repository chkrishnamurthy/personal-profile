import "./App.css";
import NavBar from "./Components/NavBar";
import Introduction from "./Components/Introduction";
import Content from "./Components/Content";

function App() {
  return (
    <div class="font-sans">
      <NavBar />
      <div className="p-3 w-8/12 m-auto mt-28">
        <Introduction />
        <Content />
      </div>
    </div>
  );
}

export default App;
