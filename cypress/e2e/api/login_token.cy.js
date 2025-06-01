describe('API - Login', () => {
  it('Deve logar e retornar token', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: "fulano@qa.com",
        password: "teste"
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.authorization).to.be.a('string');
    });
  });
});
