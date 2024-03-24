const Introduction = () => {
  return (
    <>
      <span className="text-4xl sm:text-6xl text-white">Hello, I'm</span>
      <div className="flex items-center my-6 sm:mt-6">
        <h2 className="text-4xl sm:text-6xl text-[#ff9d00] bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600">
          Krishna Murthy
        </h2>
        <span className="text-4xl sm:text-6xl animate-pulse ease-in-out duration-300">
          👋
        </span>
      </div>
    </>
  );
};

export default Introduction;
