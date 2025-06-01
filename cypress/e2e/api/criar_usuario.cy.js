describe('API - Criar usuário', () => {
  it('Deve criar um usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: "Usuário API",
        email: `api${Date.now()}@teste.com`,
        password: "teste123",
        administrador: "true"
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq("Cadastro realizado com sucesso");
    });
  });
});
