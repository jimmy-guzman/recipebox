export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};


export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['String'];
  title: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Ingredients = {
  __typename?: 'Ingredients';
  id: Scalars['String'];
  title: Scalars['String'];
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
};


export type IngredientsIngredientsArgs = {
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe: Recipe;
  updateRecipe: Recipe;
  deleteRecipe: Scalars['String'];
  createIngredient: Ingredient;
};


export type MutationCreateRecipeArgs = {
  title: Scalars['String'];
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['String'];
};


export type MutationCreateIngredientArgs = {
  title: Scalars['String'];
  recipeId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  recipe: Recipe;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['String'];
  title: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
  ingredients: Array<Maybe<Scalars['String']>>;
};

export type Recipes = {
  __typename?: 'Recipes';
  id: Scalars['String'];
  title: Scalars['String'];
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};


export type RecipesRecipesArgs = {
  title?: Maybe<Scalars['String']>;
};
