import Accordion from "./components/accordion/accordion";
import {
  staticAccordionData,
  AccordionData,
} from "./components/accordion/accordionData";
import StarRating from "./components/star/starRating";

function App() {
  const data = AccordionData();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-black">
      <StarRating totalStars={6} />
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
