const assert = require('assert');
 
Feature('Favorite Resto');
 
Before(({ I }) => {
    I.amOnPage('/#/favorites-page');
  });
 
Scenario('showing empty favorited restaurant', ({ I }) => {
    I.waitForElement('#isEmpty > h2', 5);
    I.see("You don't have any Favorite Restaurant", '#isEmpty > h2');
});
 
Scenario('Favoriting a restaurant', async ({ I }) => {
    I.waitForElement('#isEmpty > h2', 5);
    I.see("You don't have any Favorite Restaurant", '#isEmpty > h2');
   
    I.amOnPage('/');
    I.see('Loading Data......', "#loading");
    I.wait(1);
 
    I.seeElement('.card-item');
    I.seeElement('.resto-item__title a');
    
    const firstResto = locate('.resto-item__title a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.wait(1);
    I.click(firstResto);

    I.wait(1);
    I.seeElement('#FavButton');
    I.click('#FavButton');
    I.amOnPage('/#/favorites-page');
    I.seeElement('.card-item');
 
    const favoritedRestoTitle = await I.grabTextFrom('.resto-item__title');
    assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});