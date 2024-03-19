import { FaFileAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      {/* <nav>
        <div className="max-w-7xl mx-auto px-4 fixed">
          <div className="flex justify-between h-16">
            {/* Logo */}
      {/* <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white text-3  xl font-bold">
                {`</>`}
              </a>
            </div>

            <div className="flex items-center justify-center">
              <a
                href="/"
                title="Resume"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium flex items-center"
              >
                <FaFileAlt />
                <div className="hidden text-xl md:block ml-3 user-select-none">
                  Resume
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      <nav class="w-full px-24 fixed top-0 bg-[#1E2B3B] z-50 shadow-md">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-white text-3xl font-bold">{`</>`}</span>
          </div>

          <div class="flex items-center justify-center">
            <a
              href="/"
              title="Resume"
              class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium flex items-center"
            >
              <FaFileAlt />
              <div class="hidden text-xl md:block ml-3 user-select-none">
                Resume
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
