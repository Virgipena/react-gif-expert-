import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one Punch']);

  const onnAddCategory = (NewCategory) => {
    //Valida si la categoria ya está incluida
    if (categories.includes(NewCategory)) return;
    // categories.push(NewCategory);
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <h1> GifExpertApp </h1>

      <AddCategory onNewCategory={(value) => onnAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
