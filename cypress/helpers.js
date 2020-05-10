import { username, password } from './creds';

const host = Cypress.env('HOST');

export const login = () => {

  cy.location('href').then((href) => {

    if (href.indexOf(host) === -1) {
      cy.visit(host);
    }

    cy.get('#email').clear().type(username);

    cy.get('#password').clear().type(password);

    cy.get('#signin_button').click();

    cy.location('hash').should('not.include', 'login');

  });
};

export const logout = () => {
  cy.get('#homepage_menu_button').click();
  cy.get('#homepage_logout_button').click();
};

export const logoutLogin = () => {
  // initially it gets in, and if there is no cookie it redirects to login, and if there is it redirects to main screen
  // There is no way for you to check cookies, so wait 500 ms and then check url hash to either login or logout


  cy.reload();


  cy.location('href').then((href) => {

    if (href.indexOf(host) === -1) {
      cy.visit(host);
      cy.wait(1000);
    }

    cy.wait(3000);

    cy.location('hash').then((hash) => {
      if (hash.indexOf('login') === -1) {
        logout();
        login();
      } else {
        login();
      }
    });
  });
};


