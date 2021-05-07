/* eslint-disable jest/expect-expect */
const newRecipe = 'banana smoothie'
const newRecipeName = 'soda smoothie'
const newIngredient = '1x banana'
const newIngredientName = '2x soda'

describe('instructions', () => {
  beforeEach(() => cy.visit('/'))

  it('should be able to create new recipe', () => {
    // create new recipe
    cy.findByPlaceholderText(/new recipe/).type(`${newRecipe}{enter}`)
    cy.findByText(newRecipe).click()

    // change recipe name
    cy.findByDisplayValue(newRecipe).dblclick()
    cy.findByDisplayValue(newRecipe).type(`{selectall}{del}${newRecipeName}`)
    cy.findByDisplayValue(newRecipeName).should('exist')

    // create new name
    cy.findByPlaceholderText(/new ingredient/).type(`${newIngredient}{enter}`)
    cy.findByDisplayValue(newIngredient).should('exist')

    // change ingredient name
    cy.findByDisplayValue(newIngredient).dblclick()
    cy.findByDisplayValue(newIngredient).type(
      `{selectall}{del}${newIngredientName}`
    )
    cy.findByDisplayValue(newIngredientName).should('exist')

    // delete ingredient
    cy.findByRole(/button/, { name: `delete ${newIngredientName}` }).click()
    cy.findByDisplayValue(newIngredientName).should('not.exist')

    cy.findByRole(/link/, { name: 'back' }).click()
    cy.findByText(newRecipeName).should('exist')

    cy.findByRole(/button/, { name: `delete ${newRecipeName}` }).dblclick()
    cy.findByText(newRecipeName).should('not.exist')
  })
})
