describe('tweet spec', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/home');
  });

  it('should add new tweet', () => {
    cy.get('[data-testid="tweet-textarea"]')
      .should('exist')
      .type('New test tweet');

    cy.get('[data-testid="create-tweet-button"]').should('exist').click();
  });

  it('Should upload an image successfully', () => {
    cy.fixture('image').then(({ fileContent, fileName }) => {
      cy.get('[data-testid="tweet-file-input"]').attachFile({
        fileContent,
        fileName,
        mimeType: 'image/jpeg',
      });
    });

    cy.get('[data-testid="create-tweet-button"]').click();
  });
});
