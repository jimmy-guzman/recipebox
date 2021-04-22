import { Recipes } from '@recipe-box/components'
import { useRecipes, useAddRecipe } from '@recipe-box/state'

const Home = (): JSX.Element => {
  const recipes = useRecipes()
  const addRecipe = useAddRecipe()

  return <Recipes addRecipe={addRecipe} recipes={recipes} />
}

export default Home
