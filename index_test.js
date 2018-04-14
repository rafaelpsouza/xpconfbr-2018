Feature('Index');

Scenario('Página inicial possui título', (I) => {
  I.amOnPage('/');
  I.see('Olá');
});

Scenario('Página inicial possui título', (I) => {
  I.amOnPage('/');
  I.click('Navbar');
  I.see('Olá');
});