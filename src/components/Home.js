import React from "react";
import { Link } from "react-dom";

function Home() {
  return (
    <header>
      <h4>Välkommen till Student plattform</h4>

      <a className="btn btn-info mt-4" href="/newStudent">
        Ny student?
      </a>
    </header>
  );
}

export default Home;
