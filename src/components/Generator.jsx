import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Header from "./Header";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

const Generator = ({
  poison,
  setPoison,
  muscles,
  setMuscles,
  goal,
  setGoal,
  updateWorkout,
}) => {
  let [showModal, setShowModal] = useState(false);

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          // type = [ 'individual' or 'bro_split' or 'bodybuilder_split' or 'upper_lower' ]
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              key={typeIndex}
              className={
                "boorder bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg " +
                (type === poison
                  ? " border-blue-600 bg-slate-600 text-slate-200"
                  : " border-blue-400")
              }
            >
              <p className="capitalize">{type.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950 border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={() => setShowModal(!showModal)}
          className="relative items-center justify-center p-3"
        >
          <p className="capitalize">
            {muscles.length === 0 ? "Select muscle group" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  className={
                    "hover:text-blue-400 duration-200 " +
                    (muscles.includes(muscleGroup) ? "text-blue-400" : "")
                  }
                  key={muscleGroupIndex}
                >
                  <p className="uppercase">{muscleGroup.replace("_", " ")}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              key={schemeIndex}
              className={
                "boorder bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg " +
                (scheme === goal
                  ? " border-blue-600 bg-slate-600 text-slate-200"
                  : " border-blue-400")
              }
            >
              <p className="capitalize">{scheme.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
};

export default Generator;
