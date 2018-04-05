import React from "react";

const Recipes = () => {
  return (
    <div className="recipes__container grid__col--6">
      <header className="recipes__header">
        <h1>Recipes</h1>
      </header>

      <ul className="recipes__list">
        <li className="recipes__item">recipe #1</li>
        <li className="recipes__item">recipe #2</li>
        <li className="recipes__item">recipe #3</li>
        <li className="recipes__item">recipe #4</li>
        <li className="recipes__item">recipe #5</li>
        <li className="recipes__item">recipe #6</li>
      </ul>
    </div>
  );
};
export default Recipes;
