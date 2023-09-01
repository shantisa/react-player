describe('Test Video Player Functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('displays the video player, search bar, and logo', () => {
        cy.get('.searchInput').should('be.visible');
        cy.get('#logo').should('be.visible');
        cy.get('.searchBtn img').should('exist'); //makes sure the button is shown with the image inside
        cy.get('#videoLink').should('be.visible');
    });

});