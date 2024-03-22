describe('registration spec', () => {
  before(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.exec(
      "curl -H 'Authorization: Bearer owner' -X DELETE http://localhost:9099/emulator/v1/projects/modsen-twitter-f00c1/accounts",
    );
  });

  it('should registrate user with correct data', () => {
    cy.visit('/register');

    cy.fixture('user').then(({ email, password, phone, name }) => {
      cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type(password);
      cy.get('input[placeholder="Phone number"]').type(phone);
      cy.get('input[placeholder="Name"]').type(name);

      cy.get('[data-testid=register-submit]').click();

      cy.url().should('include', '/profile');
    });
  });

  it('should not registrate if email is invalid', () => {
    cy.visit('/register');

    cy.fixture('user').then(({ password, phone, name }) => {
      cy.get('input[placeholder="Email"]').type('invalid email');
      cy.get('input[placeholder="Password"]').type(password);
      cy.get('input[placeholder="Phone number"]').type(phone);
      cy.get('input[placeholder="Name"]').type(name);

      cy.contains('Must be a valid email').should('be.visible');
      cy.get('[data-testid=register-submit]').click();

      cy.url().should('not.be', '/profile');
    });
  });

  it('should not registrate if phone is invalid', () => {
    cy.visit('/register');

    cy.fixture('user').then(({ email, password, name }) => {
      cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type(password);
      cy.get('input[placeholder="Phone number"]').type('invalid phone');
      cy.get('input[placeholder="Name"]').type(name);

      cy.contains('Phone number is not valid').should('be.visible');
      cy.get('[data-testid=register-submit]').click();

      cy.url().should('not.be', '/profile');
    });
  });

  it('should not registrate if password is invalid', () => {
    cy.visit('/register');

    cy.fixture('user').then(({ email, phone, name }) => {
      cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type('invalid password');
      cy.get('input[placeholder="Phone number"]').type(phone);
      cy.get('input[placeholder="Name"]').type(name);

      cy.contains('Must contain one uppercase letter and one number').should(
        'be.visible',
      );
      cy.get('[data-testid=register-submit]').click();

      cy.url().should('not.be', '/profile');
    });
  });
});
