/*
    Nama    : I Made Genadi Dharma Slawa
    NIM     : 1941720070
    Kelas   : TI-3D
*/

/// <reference types="cypress"/>

describe('Remove Barang dari Cart', () => {

    beforeEach(() => {
        // The step you'll always run every scenario, eg: Login
        cy.visit(Cypress.config().baseUrl)
        login('standard_user', 'secret_sauce')
    })

    it('Masukan 1 barang ke Cart, lalu Hapus 1 barang dari Cart', () => {

        cartAction('list', 'add', [0])
        cartAction('list', 'remove', [0])

        cy.get('.inventory_item')
            .find('button')
            .eq(0)
            .should('have.text', 'Add to cart')
    })

    it('Masukan 1 barang ke Cart Masuk ke halaman detail barang Hapus 1 barang dari Cart di halaman detail', () => {
        cartAction('detail', 'add', 0)
        cartAction('detail', 'remove', 0)

        cy.get('.inventory_details')
            .contains('Add to cart', {matchCase: false})
            .should('have.text', 'Add to cart')
    })

    it('Masukan 1 barang ke Cart Hapus 1 barang dari Cart lewat halaman Cart', () => {
        cartAction('list', 'add', [0])
        cartAction('cart', 'remove', [0], 1)

        cy.get('.shopping_cart_badge')
            .should('not.exist')
    })

    it('Masukan 2 barang ke Cart Hapus 1 barang dari Cart lewat halaman Cart', () => {
        cartAction('list', 'add', [0, 4])
        cartAction('cart', 'remove', [0], 1)

        cy.get('.cart_item')
            .find('.inventory_item_name')
            .should('have.text', 'Sauce Labs Backpack')
    })

    it('Masukan 2 barang ke Cart Hapus 2 barang dari Cart lewat halaman Cart Checkout', () => {
        cartAction('list', 'add', [0, 4])
        cartAction('cart', 'remove', [0, 4], 2)

        cy.get('.shopping_cart_badge')
            .should('not.exist')
    })

})

function login(username, password) {
	// Type username field, and wait 1s
	cy.get('#user-name')
		.type(username)
		.wait(500)

	// Type password field, and wait 1s
	cy.get('#password')
		.type(password, {log: false})
		.wait(500)

	// Click Login button, and wait 2s
	cy.get('#login-button')
		.click()
		.wait(1000)

}

// Function for Cart Action(Add & Remove) in List Page, Detail Page, or Cart Page
function cartAction(page, action, eqs, removeCount = 0){
    // specify the action, whether Add or Remove
    let value = (action == 'add') ? 'Add to cart' : 'Remove'

    switch (page) {
        case 'list':
                // Loop all the item positions in list, click based on the position
                // click the add or remove button according to 'value' parameter
                eqs.forEach(eq => {
                    cy.get('.inventory_item')
                        .eq(eq)
                        .contains(value, {matchCase: false})
                        .click()
                        .wait(1000)
                });
            
            break;
        
        case 'detail':
            // redirect to detail page from list
            if(action == 'add'){
                cy.get('.inventory_item')
                    .find('a')
                    .eq(eqs)
                    .click()
                    .wait(1000)
            }

            // click the add or remove button according to 'value' parameter
            cy.get('.inventory_details')
                .contains(value, {matchCase: false})
                .click()
                .wait(1000)
            break;

        case 'cart':
            // redirect to cart page from list
            cy.get('.shopping_cart_link')
            .click()
            .wait(1000)

            // Remove items in cart from bottom to top, since the latest item additon added to the very below
            cy.get('.cart_item').its('length').then((numberOfItems) => {
                let i = numberOfItems - 1

                do{
                    cy.get('.cart_item')
                        .eq(i)
                        .contains(value, {matchCase: false})
                        .click()
                        .wait(1000)
                    
                    removeCount--
                    if(i > 0){
                        i--
                    }
                }while(removeCount > i)
            })
            break;
    
        default:
            break;
    }
}