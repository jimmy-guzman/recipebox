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
  name: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Ingredients = {
  __typename?: 'Ingredients';
  id: Scalars['String'];
  name: Scalars['String'];
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
};


export type IngredientsIngredientsArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe: Recipe;
  updateRecipe: Recipe;
  deleteRecipe: Recipe;
  createIngredient: Ingredient;
  updateIngredient: Ingredient;
  deleteIngredient: Ingredient;
};


export type MutationCreateRecipeArgs = {
  name: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['String'];
};


export type MutationCreateIngredientArgs = {
  name: Scalars['String'];
  recipeId: Scalars['String'];
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  recipe: Recipe;
  ingredient: Ingredient;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};


export type QueryIngredientArgs = {
  id: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
  ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Recipes = {
  __typename?: 'Recipes';
  id: Scalars['String'];
  name: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};


export type RecipesRecipesArgs = {
  name?: Maybe<Scalars['String']>;
};
