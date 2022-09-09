import React, { useState } from "react";
import { useEffect } from "react";

const Items2 = () => {
  const [food, setfood] = useState("");
  useEffect(() => {
    const url =
      `https://api.spoonacular.com/recipes/716429/information?apiKey=` +
      `${process.env.REACT_APP_API_KEY}&includeNutrition=true`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setfood(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="text-white">{food.title}</p>
      <img src={food.image} alt="" />
      <div className="flex flex-col justify-start">
        <ul className="text-white">
          Ingredients
          <li>{food.nutrition.ingredients[0].name}</li>
          <li>{food.nutrition.ingredients[1].name}</li>
          <li>{food.nutrition.ingredients[2].name}</li>
          <li>{food.nutrition.ingredients[3].name}</li>
          <li>{food.nutrition.ingredients[4].name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Items2;
