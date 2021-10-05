import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <main className="Search-engine">
          <h1 className="mb-5 title">Dictionary</h1>
          <Dictionary defaultKeyword="solar eclipse" />
        </main>
        <footer>
          <a
            href="https://github.com/sajoh002/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Sarah Johnson
          <br />
          <small>
            Background image by{" "}
            <a
              href="https://www.freepik.com/photos/background"
              target="_blank"
              rel="noreferrer"
            >
              jcomp
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
