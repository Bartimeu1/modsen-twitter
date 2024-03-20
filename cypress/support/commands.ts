import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
  cy.fixture('user').then((user) => {
    cy.visit('/login');

    cy.get('input[placeholder="Email address"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);
    cy.get('[data-testid="login-submit"]').click();

    cy.url().should('include', '/profile');
  });
});
