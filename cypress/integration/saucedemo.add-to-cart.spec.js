/*
    Nama    : MUHAMMAD RIDHO RAMDAHAN
    NIM     : 1941720149
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

    it('Pilih 2 barang di menu secara langsung', () => {
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        cy.get('.shopping_cart_link').click();

    })

    it('Pilih salah satu menu untuk menampilkan barang', () => {
        cy.get('.inventory_item').contains('Sauce Labs Onesie').click();
        cy.get('.inventory_details').contains('Add to cart').click();
        cy.get('.shopping_cart_link').click();

    })

    it('Pilih salah satu menu untuk menampilkan barang', () => {
        cy.get('.inventory_item').contains('Sauce Labs Bike Light').click();
        cy.get('.inventory_details').contains('Add to cart').click();
        cy.get('.shopping_cart_link').click();

    })

    

})
