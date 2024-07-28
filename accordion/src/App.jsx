import Accordion from "./components/accordion";
import {staticAccordionData, AccordionData} from "./components/accordionData";

function App() {
  const data = AccordionData();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-black">
      {staticAccordionData.map((item, i) => (
        <Accordion key={i} {...item} />
      ))}
      <h2 className="text-xl font-bold text-white">API</h2>
      {data?.map((item) => (
        <Accordion {...item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
