import { generate } from 'random-words';

interface Ingredient {
  name: string;
}

interface Recipe {
  ingredients: {
    create: Ingredient[];
  };
  name: string;
}

interface User {
  recipes: {
    create: Recipe[];
  };
  userName: string;
}

const randomNumber = (min: number, max: number): number => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);

  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

const toSentenceCase = (str: string): string => {
  return str.replace(/\w\S*/g, (word: string) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
};

const randomPhrases = (
  min = 2,
  max = 8,
  formatter = toSentenceCase,
): string[] => {
  const potentialPhrases = generate({
    min,
    max,
    wordsPerString: randomNumber(2, 4),
    formatter,
  });

  return Array.isArray(potentialPhrases)
    ? potentialPhrases
    : [potentialPhrases];
};

const createIngredients = (): Ingredient[] => {
  const ingredients = randomPhrases();

  return ingredients.map((ingredient) => ({
    name: ingredient,
  }));
};

const createRecipes = (): Recipe[] => {
  const recipes = randomPhrases();

  return recipes.map((recipe) => ({
    name: recipe,
    ingredients: { create: createIngredients() },
  }));
};

const randomUserNames = (min: number, max: number): string[] => {
  const potentialUserNames = generate({
    min,
    max,
    wordsPerString: 2,
    separator: '-',
  });

  return Array.isArray(potentialUserNames)
    ? potentialUserNames
    : [potentialUserNames];
};

export const createRandomUsers = (min: number, max: number): User[] => {
  const users = randomUserNames(min, max);

  return users.map((userName) => ({
    userName,
    recipes: { create: createRecipes() },
  }));
};

export const logRandomUsers = <T extends { userName: string }[]>(
  users: T,
): void => {
  // eslint-disable-next-line no-console
  console.log(
    `Created ${users.length} users: ${users
      .map(({ userName }) => userName)
      .join(', ')}`,
  );
};
