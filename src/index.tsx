import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

const App: React.FC = () => {
  return <div className="mx-auto w-3/5 text-center">Hello, world!</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<App />);
