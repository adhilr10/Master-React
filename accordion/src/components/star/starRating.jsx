import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      {[...Array(totalStar)].map((_, index) => {
        const startValue = index + 1;

        return (
          <FaStar
            key={index}
            onClick={() => setRating(startValue)}
            onMouseEnter={() => setHover(startValue)}
            onMouseLeave={() => setHover(0)}
            className={`h-8 w-8 cursor-pointer transition-colors duration-300, ${
              startValue <= (rating || hover)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
