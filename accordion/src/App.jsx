import "./App.css";
import Accordion from "./accordion";
function App() {
  const accordionData = [
    {
      title: "Accordion 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto error quasi repudiandae veniam a odit iste, libero voluptate repellat! Quod voluptatum nulla ipsa quae dicta pariatur nobis ab voluptatem?",
    },
    {
      title: "Accordion 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto error quasi repudiandae veniam a odit iste, libero voluptate repellat! Quod voluptatum nulla ipsa quae dicta pariatur nobis ab voluptatem?",
    },
    {
      title: "Accordion 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto error quasi repudiandae veniam a odit iste, libero voluptate repellat! Quod voluptatum nulla ipsa quae dicta pariatur nobis ab voluptatem?",
    },
    {
      title: "Accordion 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto error quasi repudiandae veniam a odit iste, libero voluptate repellat! Quod voluptatum nulla ipsa quae dicta pariatur nobis ab voluptatem?",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-black">
      {accordionData.map((item, i) => (
        <Accordion key={i} {...item} />
      ))}
    </div>
  );
}

export default App;
