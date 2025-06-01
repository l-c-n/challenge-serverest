describe('Login de usuário', () => {
  it('Deve permitir login com usuário válido', () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type('fulano@qa.com');
    cy.get('[data-testid="senha"]').type('teste');
    cy.get('[data-testid="entrar"]').click();

    cy.url().should('include', '/home');
    cy.contains('Bem Vindo').should('be.visible');
  });
});
