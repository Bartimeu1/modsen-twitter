describe('login spec', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Should open edit modal after button click', () => {
    cy.get('[data-testid=open-edit-button]').click();

    cy.get('[data-testid=edit-modal]').should('be.visible');
  });

  it('Should change user data with valid values', () => {
    cy.get('[data-testid=open-edit-button]').click();

    cy.fixture('user').then(({ name, bio }) => {
      cy.get('input[placeholder="Name"]').clear().type(name);
      cy.get('input[placeholder="Bio"]').clear().type(bio);

      cy.get('[data-testid=edit-modal-submit]').click();

      cy.get('[data-testid=profile-name]').invoke('text').should('eq', name);
      cy.get('[data-testid=profile-bio]').invoke('text').should('eq', bio);
    });
  });

  it('Should display validation error text when data is invalid', () => {
    cy.get('[data-testid=open-edit-button]').click();

    cy.get('input[placeholder="Email"]').clear().type('invalidemail');
    cy.get('[data-testid=edit-modal-submit]').click();

    cy.contains('Must be a valid email').should('be.visible');
  });
});
