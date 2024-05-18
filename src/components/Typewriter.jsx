import Typewriter from 'typewriter-effect';

const TypewriterSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-solid"></div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Analyzing...
        </p>
        <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
          <Typewriter
            options={{
              strings: [
                "Please Wait!",
              ],
              autoStart: true,
              loop: false,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default TypewriterSpinner;