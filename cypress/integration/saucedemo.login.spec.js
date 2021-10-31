/*
    Nama    : Khosy Robbin Hood
    NIM     : 1941720067
    Kelas   : TI-3D
*/

/// <reference types="cypress"/>

describe('Login Page - Login Test', () => {

    beforeEach(() => {
        // The step you'll always run every scenario, eg: Login
        cy.visit('https://www.saucedemo.com/')
    })

    // Test 1
    it('Standard User', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    // Test 2
    it('Standard User - Invalid Password', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sambal')
        cy.get('#login-button').click()
    });

    // Test 3
    it('Standard User - Invalid Username', () => {
        cy.get('#user-name').type('User_biasa')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    });

    // Test 4
    it('Standard User - Invalid Username & Invalid Password', () => {
        cy.get('#user-name').type('user123')
        cy.get('#password').type('password123')
        cy.get('#login-button').click()
    });

    // Test 5
    it('Locked Out User', () => {
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    });

    // Test 6
    it('Problem User', () => {
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    });
})