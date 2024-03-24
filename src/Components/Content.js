const Content = () => {
  return (
    <div className="font-source-code-pro font-mono text-white mt-16">
      <div className="flex flex-col gap-6">
        <p className="text-3xl">{`<html>`}</p>
        <p className="text-3xl">{`<head>`}</p>
        <p className="text-3xl ml-4">{`<title>`}</p>
        <span className="text-3xl text-gray-400 ml-8">Personal Portfolio</span>
        <p className="text-3xl ml-4">{`</title>`}</p>
        <p className="text-3xl">{`</head>`}</p>
        <p className="text-3xl mb-4">{`<body>`}</p>

        <p className="text-3xl ml-4">{`<div id="About">`}</p>
        <span className="text-3xl text-gray-400 ml-8">About comes here</span>
        <p className="text-3xl ml-4 mb-4">{`</div>`}</p>

        <p className="text-3xl ml-4">{`<div id="Skills">`}</p>
        <span className="text-3xl text-gray-400 ml-8">Skills comes here</span>
        <p className="text-3xl ml-4 mb-4">{`</div>`}</p>

        <p className="text-3xl ml-4">{`<div id="Work-Experience">`}</p>
        <span className="text-3xl text-gray-400 ml-8">
          Work Experience comes here
        </span>
        <p className="text-3xl ml-4 mb-4">{`</div>`}</p>

        <p className="text-3xl ml-4">{`<div id="Projects">`}</p>
        <span className="text-3xl text-gray-400 ml-8">Projects comes here</span>
        <p className="text-3xl ml-4 mb-4">{`</div>`}</p>

        <p className="text-3xl mt-4">{`</body>`}</p>

        <p className="text-3xl">{`</html>`}</p>
      </div>
    </div>
  );
};

export default Content;
