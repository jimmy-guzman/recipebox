describe('instructions', () => {
  beforeEach(() => cy.visit('/'))

  it('should be able to toggle instructions', () => {
    cy.findByRole(/button/, { name: 'close instructions' }).click()
    cy.findByText(
      /Click on a recipe name to view that recipe's ingredients/i
    ).should('not.exist')
  })
})
