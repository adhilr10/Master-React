import { useState } from "react";

const Accordion = ({ name, body }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-[80vh] bg-gray-100 rounded-sm m-4">
      <div
        className="flex justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <h1 className="text-xl font-bold">{name}</h1>
        <h2 className="text-2xl font-bold mr-4">{isActive ? "-" : "+"}</h2>
      </div>
      {isActive && <p>{body}</p>}
    </div>
  );
};

export default Accordion;
