/*
    Nama    : Rizkina Hayyuni Putri
    NIM     : 1941720008
    Kelas   : TI-3D
*/

/// <reference types="cypress"/>

describe('Filter Barang', () => {
    const username = 'standard_user'
    const password = 'secret_sauce'

    beforeEach(() => {
        // The step you'll always run every scenario, eg: Login
        cy.visit(Cypress.config().baseUrl)

        cy.get('#user-name').type(username);
        cy.get('#password').type(password);

        cy.get('#login-button').click();
    })

    it('Filter dengan Name(A to Z)', () => {
        cy.get('select').select('az');

        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text","Sauce Labs Backpack");
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text","Sauce Labs Bike Light");
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text","Sauce Labs Bolt T-Shirt");
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text","Sauce Labs Fleece Jacket");
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text","Sauce Labs Onesie");
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text","Test.allTheThings() T-Shirt (Red)");        
    })

    it('Filter dengan Name(Z to A)', () => {
        cy.get('select').select('za');

        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text","Test.allTheThings() T-Shirt (Red)");
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text","Sauce Labs Onesie");
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text","Sauce Labs Fleece Jacket");
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text","Sauce Labs Bolt T-Shirt");
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text","Sauce Labs Bike Light");
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text","Sauce Labs Backpack");          
    })

    it('Filter dengan Price(low to High)', () => {
        cy.get('select').select('lohi');

        cy.get('[class="inventory_item_price"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_price"]').eq(0).should("have.text","$7.99");
        cy.get('[class="inventory_item_price"]').eq(1).should("have.text","$9.99");
        cy.get('[class="inventory_item_price"]').eq(2).should("have.text","$15.99");
        cy.get('[class="inventory_item_price"]').eq(3).should("have.text","$15.99");
        cy.get('[class="inventory_item_price"]').eq(4).should("have.text","$29.99");
        cy.get('[class="inventory_item_price"]').eq(5).should("have.text","$49.99");          
    })

    it('Filter dengan Price(ligh to low)', () => {
        cy.get('select').select('hilo');

        cy.get('[class="inventory_item_price"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_price"]').eq(0).should("have.text","$49.99");
        cy.get('[class="inventory_item_price"]').eq(1).should("have.text","$29.99");
        cy.get('[class="inventory_item_price"]').eq(2).should("have.text","$15.99");
        cy.get('[class="inventory_item_price"]').eq(3).should("have.text","$15.99");
        cy.get('[class="inventory_item_price"]').eq(4).should("have.text","$9.99"); 
        cy.get('[class="inventory_item_price"]').eq(5).should("have.text","$7.99");       
    })

    it('Filter dengan Price(Z to A) dan Masukkan 1 barang ke cart', () => {
        cy.get('select').select('za');
        cy.get('[id="add-to-cart-sauce-labs-onesie"]').click();

        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text","Test.allTheThings() T-Shirt (Red)");
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text","Sauce Labs Onesie");
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text","Sauce Labs Fleece Jacket");
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text","Sauce Labs Bolt T-Shirt");
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text","Sauce Labs Bike Light");
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text","Sauce Labs Backpack");
        cy.get('[class="shopping_cart_badge"]').should("have.text","1");
    })
})