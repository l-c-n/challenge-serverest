describe('Cadastro de produto', () => {
  it('Deve cadastrar um administrador e em seguida cadastrar um produto com sucesso', () => {
    // Acessa a página de cadastro de usuário
    cy.visit('/cadastrarusuarios');

    // Gera dados únicos
    const email = `admin_${Date.now()}@teste.com`;
    const nome = `Administrador ${Date.now()}`;

    // Preenche o formulário de cadastro de administrador
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type('admin123');
    cy.get('[data-testid="checkbox"]').check();
    cy.get('[data-testid="cadastrar"]').click();

    cy.contains('Cadastro realizado com sucesso').should('be.visible');

    // Realiza login com o administrador recém-criado
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type('admin123');
    cy.get('[data-testid="entrar"]').click();

    // Navega até a tela de cadastro de produtos
    cy.get('[data-testid="cadastrar-produtos"]').click();

    // Preenche o formulário com base nos data-testid reais
    cy.get('[data-testid="nome"]').should('be.visible').type('Produto E2E Teste');
    cy.get('[data-testid="preco"]').type('150');
    cy.get('[data-testid="descricao"]').type('Produto criado automaticamente');
    cy.get('[data-testid="quantity"]').type('20');
//  cy.get('[data-testid="imagem"]').type('https://via.placeholder.com/150');
    cy.get('[data-testid="imagem"]').attachFile('imagem-exemplo.jpg');


    // Clica no botão de cadastrar (mesmo com o nome errado)
    cy.get('[data-testid="cadastarProdutos"]').click();

    // Verifica mensagem de sucesso
    cy.contains('Lista dos Produtos').should('be.visible');
  });
});
