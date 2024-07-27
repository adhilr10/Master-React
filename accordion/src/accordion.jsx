import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, description }) => {
  
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-[80vh] bg-gray-100 rounded-sm m-4">
      <div
        className="flex justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <h2 className="text-2xl font-bold mr-4">{isActive ? "-" : "+"}</h2>
      </div>
      {isActive && <p>{description}</p>}
    </div>
  );
};

export default Accordion;
