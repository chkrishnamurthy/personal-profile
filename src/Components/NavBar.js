import { FaFileAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white text-xl font-bold">
                My Logo
              </a>
            </div>

            <div className="flex items-center justify-center cursor-pointer">
              <span
                title="Resume"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium flex items-center"
              >
                <FaFileAlt />
                <div className="hidden md:block ml-3 user-select-none">
                  Resume
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
