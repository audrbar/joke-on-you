import React, { useState, useEffect } from "react";
import "./App.css";
import JokeCard from "./Components/JokeCard";

const API_URL = "https://v2.jokeapi.dev/joke/Programming?amount=10";

function App() {
  const [jokes, setJokes] = useState([]);

  const impJokes = async (title) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setJokes(data.Jokes);
  };

  useEffect(() => {
    impJokes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">joke-on-you</header>
      {jokes?.length > 0 ? (
        <div className="container">
          {jokes.map((joke) => (
            <JokeCard joke={joke} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No jokes found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
