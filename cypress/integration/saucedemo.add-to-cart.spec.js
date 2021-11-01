/*
    Nama    : YOUR_NAME
    NIM     : YOUR_NIM
    Kelas   : TI-3D
*/

/// <reference types="cypress"/>

describe('Add Barang Ke Chart', () => {

    beforeEach(() => {
        // The step you'll always run every scenario, eg: Login
        cy.visit(Cypress.config().baseUrl)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click();
        
    })

    it('Pilih 1 barang di menu secara langsung', () => {
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
        cy.get('.shopping_cart_link').click();

    })

    it('Pilih 1 barang di menu secara langsung', () => {
        cy.get('#add-to-cart-sauce-labs-onesie').click();
        cy.get('.shopping_cart_link').click();

    })

    

})