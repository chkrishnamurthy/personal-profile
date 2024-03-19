const Content = () => {
  return (
    <div className="font-source-code-pro font-mono text-white mt-16">
      <div className="flex flex-col gap-6">
        <p className="text-4xl font-extrabold">{`<html>`}</p>
        <p className="text-4xl font-extrabold">{`<head>`}</p>
        <p className="text-4xl font-extrabold ml-4">{`<title>`}</p>
        <span className="text-4xl text-gray-400 font-bold ml-8">
          Personal Portfolio
        </span>
        <p className="text-4xl font-extrabold ml-4">{`</title>`}</p>
      </div>
    </div>
  );
};

export default Content;
