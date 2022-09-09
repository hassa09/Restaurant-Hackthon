import React from 'react';
import { useEffect } from 'react';

const Items = () => {
  useEffect(() => {
    const url =
      `https://api.spoonacular.com/recipes/716429/information?apiKey=` +
      `${process.env.REACT_APP_API_KEY}&includeNutrition=true`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  return <div>Items</div>;
};

export default Items;
