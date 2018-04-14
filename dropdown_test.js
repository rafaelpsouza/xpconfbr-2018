Feature('Dropdown Features');

Scenario('Clicar no Dropdown deve mostrar opções do menu', (I) => {
  I.amOnPage('/');
  I.dontSee('Change Background');
  I.dontSee('Show Alert');
  I.click('Dropdown');
  I.see('Change Background');
  I.see('Show Alert');
});

Scenario('Background deve mudar ao selecionar opção', (I) => {
  I.amOnPage('/');
  I.click('Dropdown');
  I.click('Change Background');
  I.seeCssPropertiesOnElements('#main', { 'background-color': "red"});
});

Scenario('Background deve mudar ao selecionar opção', (I) => {
  I.amOnPage('/');
  I.click('Dropdown');
  I.click('Change Background');
  I.seeCssPropertiesOnElements('#main', { 'background-color': "red"});
});	

Scenario('Clicar em show alert deve exibir um alerta', (I) => {
  I.amOnPage('/');
  I.click('Dropdown');
  I.click('Show Alert');
  I.seeInPopup('Hey!');
});	