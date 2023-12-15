export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
};

export type Ingredient = {
  __typename?: 'Ingredient';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Ingredients = {
  __typename?: 'Ingredients';
  id: Scalars['String']['output'];
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  name: Scalars['String']['output'];
};


export type IngredientsIngredientsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient: Ingredient;
  createRecipe: Recipe;
  deleteIngredient: Ingredient;
  deleteRecipe: Recipe;
  updateIngredient: Ingredient;
  updateRecipe: Recipe;
};


export type MutationCreateIngredientArgs = {
  name: Scalars['String']['input'];
  recipeId: Scalars['String']['input'];
};


export type MutationCreateRecipeArgs = {
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  ingredient: Ingredient;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  recipe: Recipe;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};


export type QueryIngredientArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeArgs = {
  id: Scalars['String']['input'];
};

export type Recipe = {
  __typename?: 'Recipe';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Recipes = {
  __typename?: 'Recipes';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  userId: Scalars['Int']['output'];
};


export type RecipesRecipesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};
