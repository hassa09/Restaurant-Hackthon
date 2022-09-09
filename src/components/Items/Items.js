import React from 'react';
import { useEffect } from 'react';

const Items = () => {
  useEffect(() => {
    const query1 = `https://api.spoonacular.com/recipes/716429/information?apiKey=`;

    const key = `${process.env.REACT_APP_API_KEY}`;

    const query12 = `&includeNutrition=true`;

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&`;
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
