import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = ({ workout }) => {
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["the", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
          return <ExerciseCard index={index} exercise={exercise} key={index} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
