import { FaHandsClapping } from "react-icons/fa6";

const Introduction = () => {
  return (
    <>
      <span className="text-6xl text-white">Hello, I'm</span>
      <div className="flex items-center mt-4">
        <h2 className="text-6xl text-gray-500 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600">
          Krishna Murthy
        </h2>
        <span className="text-6xl animate-pulse ease-in-out duration-300">
          👋
        </span>
      </div>
    </>
  );
};

export default Introduction;
