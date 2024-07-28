import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

export const AccordionData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(API_URL);
        const resData = await res.json();
        setData(resData);
        console.log("Data fetched successfully", resData);
      } catch (error) {
        console.log("Failed to fetch", error);
      }
    };
    getData();
  }, []);
  return data;
};

export const staticAccordionData = [
  {
    name: "Accordion 1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto error quasi repudiandae veniam a odit iste, libero voluptate repellat! Quod voluptatum nulla ipsa quae dicta pariatur nobis ab voluptatem?",
  },
  {
    name: "Accordion 2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto error quasi repudiandae veniam a odit iste, libero voluptate repellat! Quod voluptatum nulla ipsa quae dicta pariatur nobis ab voluptatem?",
  },
  {
    name: "Accordion 3",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto error quasi repudiandae veniam a odit iste, libero voluptate repellat! Quod voluptatum nulla ipsa quae dicta pariatur nobis ab voluptatem?",
  },
];
