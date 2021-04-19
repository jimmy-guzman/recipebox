import { RecipeModel } from '../models'

export const recipes: Record<string, RecipeModel> = {
  recipe1: {
    id: 'recipe1',
    ingredients: ['893894', '790944', '808090', '880904', '848484', '843333'],
    name: 'Classic Deviled Eggs',
  },
  recipe2: {
    id: 'recipe2',
    ingredients: ['7', '8', '9', '10', '11'],
    name: 'Crock Pot Roast',
  },
  recipe3: {
    id: 'recipe3',
    ingredients: ['13', '14', '15'],
    name: 'Roasted Asparagus',
  },
  recipe4: {
    id: 'recipe4',
    ingredients: ['19', '20', '21', '22', '23'],
    name: 'Curried Lentils and Rice',
  },
  recipe5: {
    id: 'recipe5',
    ingredients: ['38', '37', '30', '29', '28', '27', '26', '25'],
    name: 'Big Night Pizza',
  },
  recipe6: {
    id: 'recipe6',
    ingredients: ['31', '32', '33', '34', '35', '36'],
    name: 'Cranberry & Apple Stuffed Acorn Squash',
  },
}
