import React, { useState } from "react";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import Generator from "./components/Generator";
import { generateWorkout } from "./utils/function";

function App() {
  let [workout, setWorkout] = useState(null);
  let [poison, setPoison] = useState("");
  let [muscles, setMuscles] = useState([]);
  let [goal, setGoal] = useState("");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);
    window.location.href = "#workout";
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
