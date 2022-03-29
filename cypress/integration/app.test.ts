it('should render the page', () => {
  cy.visit('/');

  cy.findByText(/Hello Vite \+ React!/i).should('exist');
});
