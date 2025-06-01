describe('Cadastro de novo usuário', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    cy.visit('/cadastrarusuarios');

    const nome = `Usuario Teste ${Date.now()}`;
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(`teste${Date.now()}@email.com`);
    cy.get('[data-testid="password"]').type('teste123');
    cy.get('[data-testid="checkbox"]').check();
    cy.get('[data-testid="cadastrar"]').click();

    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
});
