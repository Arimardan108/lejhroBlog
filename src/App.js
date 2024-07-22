import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="container">
      <header className="jumbotron text-center">
        <h1>Welcome to my website!</h1>
      </header>
      <main className="row">
        <section className="col-md-4">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </section>
        <section className="col-md-4">
          <h2>My skills</h2>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section className="col-md-4">
          <h2>Contact me</h2>
          <p>
            <a href="mailto:example@example.com">example@example.com</a>
          </p>
        </section>
      </main>
      <footer className="text-center">
        <p>&copy; 2023 My Website</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
