describe('login spec', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should log in successfully', () => {
    cy.fixture('user').then((user) => {
      cy.get('input[placeholder="Email address"]').type(user.email);
      cy.get('input[placeholder="Password"]').type(user.password);
      cy.get('[data-testid="login-submit"]').click();

      cy.url().should('include', '/profile');
    });
  });

  it('Should not login  when data email is invalid', () => {
    cy.get('input[placeholder="Email address"]').type('invalidemail');
    cy.get('input[placeholder="Password"]').type('short');
    cy.get('[data-testid="login-submit"]').click();

    cy.contains('Must be a valid email').should('be.visible');
    cy.contains('password must be at least 6 characters').should('be.visible');
  });

  it('Should display validation error text when data is invalid', () => {
    cy.get('input[placeholder="Email address"]').type('invalidemail');
    cy.get('input[placeholder="Password"]').type('short');
    cy.get('[data-testid="login-submit"]').click();

    cy.contains('Must be a valid email').should('be.visible');
    cy.contains('password must be at least 6 characters').should('be.visible');
  });

  it('Should navigate to signup page after link click', () => {
    cy.visit('/login');
    cy.get('[data-testid="login-link"]').click();

    cy.url().should('include', '/signup');
  });
});
