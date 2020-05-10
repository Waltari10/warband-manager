import { logoutLogin } from '../helpers';

context('Warband', () => {
  beforeEach(() => {
    logoutLogin();
  });

  it('Should add warband and redirect to warband screen', () => {

    cy.get('#add_warband_button').click();

    cy.get('#warband_name_textfield').click();

    cy.get('#warband_name_textfield').type('E2E test warband');

    cy.get('#back_button').click();

    cy.get('#homepage_header')
      .should('be.visible');
  });

  it('Should add then remove hero and henchman', () => {

    cy.get('#add_warband_button').click();

    cy.get('#warband_name_textfield').click();

    cy.get('#warband_name_textfield').type('E2E test warband');

    cy.get('#add_hero_button').click();


    cy.get('#add_henchman_button').click();

    cy.get('[data-cy=henchman_header]')
      .should('exist');

    cy.get('[data-cy=hero_header]')
      .should('exist');

    cy.wait(1000);

    cy.location('hash').then((hash) => {


      const hashSplit = hash.split('/');

      const warbandId = hashSplit[hashSplit.length - 1];
      cy.log(hash);
      cy.get('#back_button').click();
      cy.wait(1000);
      cy.get(`[data-cy=${warbandId}]`).click();


      cy.get('[data-cy=hero_header]')
        .should('exist');
      cy.get('[data-cy=henchman_header]')
        .should('exist');

      cy.wait(1000);
      cy.get('[data-cy=remove_hero]')
        .click();

      cy.get(':nth-child(2) > .MuiButton-label').click();


      cy.get('[data-cy=remove_henchman]')
        .click();
      cy.get(':nth-child(2) > .MuiButton-label').click();


      cy.get('[data-cy=hero_header]')
        .should('not.exist');
      cy.get('[data-cy=henchman_header]')
        .should('not.exist');


      cy.wait(1000);
      cy.get('#back_button').click();
      cy.wait(1000);
      cy.get('#homepage_header')
        .should('be.visible');
    });


  });

  it('Should add hero and henchman', () => {

    cy.get('#add_warband_button').click();

    cy.get('#warband_name_textfield').click();

    cy.get('#warband_name_textfield').type('E2E test warband');

    cy.get('#add_hero_button').click();


    cy.get('#add_henchman_button').click();

    cy.get('[data-cy=henchman_header]')
      .should('exist');

    cy.get('[data-cy=hero_header]')
      .should('exist');

    cy.wait(1000);

    cy.location('hash').then((hash) => {


      const hashSplit = hash.split('/');

      const warbandId = hashSplit[hashSplit.length - 1];
      cy.log(hash);
      cy.get('#back_button').click();
      cy.wait(1000);
      cy.get(`[data-cy=${warbandId}]`).click();


      cy.get('[data-cy=hero_header]')
        .should('exist');
      cy.get('[data-cy=henchman_header]')
        .should('exist');


      cy.wait(1000);
      cy.get('#back_button').click();
      cy.wait(1000);
      cy.get('#homepage_header')
        .should('be.visible');
    });


  });


  it('Should add and remove warband', () => {
    cy.get('#add_warband_button').click();

    cy.wait(1000);

    cy.location('hash').then((hash) => {


      const hashSplit = hash.split('/');

      const warbandId = hashSplit[hashSplit.length - 1];
      cy.log(hash);


      cy.wait(1000);

      cy.get('#warband-menu-button').click();

      cy.get('#delete_warband_button').click();

      // eslint-disable-next-line max-len
      cy.get('.MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label').click();


      cy.wait(1000);
      cy.get('#homepage_header')
        .should('be.visible');
      cy.get(`[data-cy=${warbandId}]`).should('not.exist');
    });
  });
});