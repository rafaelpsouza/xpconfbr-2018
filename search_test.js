Feature('Search');

Scenario('Busca deve retornar palavra informada', (I) => {
  I.amOnPage('/');
  I.fillField('#search-input', 'XPConf');
  I.click('Search');
  I.wait(2);
  I.see('Você buscou por: XPConf')
});