import { Recipes } from '@recipe-box/components'
import { useRecipes, useAddRecipe } from '@recipe-box/bridge'

const Home = (): JSX.Element => {
  const { isLoading, data } = useRecipes()
  const addRecipe = useAddRecipe()

  if (isLoading) return <>Loading...</>

  return <Recipes addRecipe={addRecipe.mutate} recipes={data?.recipes} />
}

export default Home
