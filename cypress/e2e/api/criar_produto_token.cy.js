describe('API - Cadastrar produto', () => {
  let token;

  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: "admin@qa.com",
        password: "admin123"
      }
    }).then((res) => {
      token = res.body.authorization;
    });
  });

  it('Deve cadastrar um produto com token válido', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: {
        Authorization: token
      },
      body: {
        nome: `Produto API ${Date.now()}`,
        preco: 99,
        descricao: "Produto via API",
        quantidade: 20
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq("Cadastro realizado com sucesso");
    });
  });
});
