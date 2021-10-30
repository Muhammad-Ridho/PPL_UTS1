/*
    Nama    : Reynaldi Ramadhani Eka Purnomo 
    NIM     : 1941720142
    Kelas   : TI-3D
*/

/// <reference types="cypress"/>

describe('CHECKOUT_TEST_CASE', () => {

    beforeEach(() => {
        // The step you'll always run every scenario, eg: Login
        cy.visit(Cypress.config().baseUrl)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click();

    })

    it('normal_checkout_with_items', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type('Reynaldi')
        cy.get('#last-name').type('Ramadhani')
        cy.get('#postal-code').type('12345')

        cy.get('#continue').click();
        cy.get('#finish').click();

        // assertion
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
    })

    it('checkout_without_items', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type('Reynaldi')
        cy.get('#last-name').type('Ramadhani')
        cy.get('#postal-code').type('12345')

        cy.get('#continue').click();
        cy.get('#finish').click();

        // assertion
        cy.get('.complete-header').should('not.have.text','THANK YOU FOR YOUR ORDER')
    })

    it('checkout_normal_input_data', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type('Reynaldi')
        cy.get('#last-name').type('Ramadhani')
        cy.get('#postal-code').type('12345')

        cy.get('#continue').click();

        cy.contains('Checkout: Overview').should('be.visible')
    })

    it('checkout_with_zip/postal_input_null', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type('Reynaldi')
        cy.get('#last-name').type('Ramadhani')

        cy.get('#continue').click();

        cy.contains('Error: Postal Code is required').should('be.visible')
    })

    it('checkout_normal_input_data', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type('Reynaldi')
        cy.get('#postal-code').type('12345')

        cy.get('#continue').click();

        cy.contains('Error: Last Name is required').should('be.visible')
    })

})