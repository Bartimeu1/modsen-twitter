describe('theme toggle spec', () => {
  beforeEach(() => {
    cy.login();
  });

  it('toggle theme button should exist', () => {
    cy.get('[data-testid="theme-toggle-button"]').should('exist');
  });

  it('base theme should be light', () => {
    cy.visit('/');
    cy.get('body')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)');
  });

  it('should change background color after theme toggle', () => {
    cy.visit('/');
    cy.get('[data-testid="theme-toggle-button"]').click();
    cy.get('body')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(3, 3, 4)');
    cy.get('[data-testid="theme-toggle-button"]').click();
    cy.get('body')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)');
  });
});
