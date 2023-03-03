import React, { useState, useEffect } from "react";
import "./App.css";
import JokeCard from "./Components/JokeCard";

const API_URL = "https://v2.jokeapi.dev/joke/Programming?amount=10";

function App() {
  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setJokes(data);
    console.log(data);
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="App">
      <h1>joke-on-you</h1>
      {jokes?.length > 0 ? (
        <div className="container">
          {jokes.map((joke) => (
            <JokeCard key={joke.id} joke={joke} />
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
