import { faker } from '@faker-js/faker';
describe("scenario test sauce demon", () => {
    beforeEach("log in account", () => {
        cy.visit("https://saucedemo.com");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    });

    afterEach("clear panier", () => {
        cy.clearCookies();
    });

    it("L'utilisateur peut ajouter un produit au panier", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[class="shopping_cart_badge"]').should("have.length", 1);
    });

    it(" vérifier que le nom du produit sélectionné est affiché dans le panier", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[class="shopping_cart_link"]').click();
        cy.get('[class="inventory_item_name"]').should(
            "contain",
            "Sauce Labs Backpack"
        );
    });

    it("L'utilisateur peut ajouter plusieurs produits au panier", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[class="shopping_cart_link"]').click();
        cy.get('[class="inventory_item_name"]').should(
            "contain",
            "Sauce Labs Backpack",
            "Sauce Labs Bike Light",
            "Sauce Labs Bolt T-Shirt"
        );
    });
});