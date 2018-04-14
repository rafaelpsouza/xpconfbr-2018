Feature('Home');

Scenario('Clicar em home deve exibir texto de boas vindas', (I) => {
  I.amOnPage('/');
  I.click('Home');
  I.see('Você está na página inicial');
});

Scenario('Mais de um click em home não deve alterar texto de boas vindas', (I) => {
  I.amOnPage('/');
  I.click('Home');
  I.see('Você está na página inicial');
  I.click('Home');
  I.see('Você está na página inicial');
});