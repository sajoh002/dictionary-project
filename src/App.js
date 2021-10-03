import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="Search-engine">
          <h1 className="mb-5">Dictionary</h1>
          <Dictionary />
        </div>
      </div>
    </div>
  );
}
