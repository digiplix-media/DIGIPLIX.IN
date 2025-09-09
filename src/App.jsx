// App.jsx
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Digiplix</h1>
        <p className="text-lg md:text-xl">
          Our official website is coming soon. Stay tuned!
        </p>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Digiplix. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
