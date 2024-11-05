function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white font-sans">
      <div className="w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-600 overflow-hidden">
        <img alt='David Lucas Silva Santos' src="https://avatars.githubusercontent.com/u/29028758?v=4"/>
      </div>
      <h1 className="text-2xl mt-4 font-bold">David Silva, Desenvolvedor Front-End</h1>
      <div className="flex space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/david-silva-santos/" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/delkz" className="text-blue-400 hover:underline">GitHub</a>
      </div>
    </div>
  );
}

export default App;
