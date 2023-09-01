import cy from "cypress";
describe('Test Video Player Functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3030/');
    });

    it('displays the video player and search bar', () => {
        cy.get('.searchInput').should('be.visible');
        cy.get('.searchBtn img').should('exist'); //makes sure the button is shown with the image inside
        cy.get('#videoLink').should('be.visible');
    });

});