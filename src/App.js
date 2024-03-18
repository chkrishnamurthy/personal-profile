import "./App.css";
import { FaFileAlt, FaBars } from "react-icons/fa";

function App() {
  return (
    <div class="min-h-screen bg-[#1E2B3B]">
      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white text-xl font-bold">
                My Logo
              </a>
            </div>

            {/* Middle section with icons */}
            <div className="flex items-center justify-center cursor-pointer">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium flex items-center">
                <FaFileAlt />
              </span>
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <FaBars />
              </span>
            </div>

            {/* Right side links */}
            <div className="hidden md:block">
              {/* Add your right side links here */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
