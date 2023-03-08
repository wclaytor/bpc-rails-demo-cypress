class Homepage{

  elements = {
    navbar : () => cy.get("nav[id='navbar']"),
    navbarBrand : () => cy.get("span[id='navbarBrand']"),
    navbarLinkHome : () => cy.get("a[id='navbarLinkHome']"),
    navbarLinkAuthors : () => cy.get("a[id='navbarLinkAuthors']"),
    navbarLinkBooks : () => cy.get("a[id='navbarLinkBooks']"),
    jumbotron : () => cy.get("div[id='jumbotron']"),
    textJumbotronHeading : () => cy.get("h1[id='textJumbotronHeading']"),
    textJumbotronSubHeading : () => cy.get("h3[id='textJumbotronSubHeading']"),
    imgBackground : () => cy.get(""),
    content : () => cy.get("div[id='content']"),
    linkBrowseByAuthor : () => cy.get("a[id='browseAuthors']"),
    linkBrowseByBook : () => cy.get("a[id='browseBooks']"),
    linkGithub : () => cy.get("a[id='github']"),
    linkKanbanBoard : () => cy.get("a[id='kanban']"),
    footer : () => cy.get("div[id='footer']"),
    linkPhotoCredit : () => cy.get("a[id='photoCredit']"),
  }

  verifyPageElements() {
    this.verifyNavbarElements();
    this.verifyJumbotronElements();
    this.verifyContentElements();
    this.verifyFooterElements();
  }

  verifyNavbarElements() {
    this.elements.navbar().should("be.visible");
    this.elements.navbarBrand().should("be.visible");
    this.elements.navbarLinkHome().should("be.visible");
    this.elements.navbarLinkAuthors().should("be.visible");
    this.elements.navbarLinkBooks().should("be.visible");
  }

  verifyJumbotronElements() {
    this.elements.jumbotron().should("be.visible");
    this.elements.textJumbotronHeading()
      .should("be.visible")
      .and('have.text', 'Developer Bookshelf');
    this.elements.textJumbotronSubHeading()
      .should("be.visible")
      .and('have.text', 'A Ruby on Rails demo');
    // this.elements.imgBackground.should("be.visible");
  }

  verifyContentElements() {
    this.elements.content().should("be.visible");
    this.elements.linkBrowseByAuthor()
      .should("be.visible")
      .and('have.text', 'author name');
    this.elements.linkBrowseByBook()
      .should("be.visible")
      .and('have.text', 'book title');
    this.elements.linkGithub()
      .should("be.visible")
      .and('have.text', 'Github');
    this.elements.linkKanbanBoard()
      .should("be.visible")
      .and('have.text', 'Kanban board');
  }

  verifyFooterElements() {
    this.elements.footer().should("be.visible");
    this.elements.linkPhotoCredit()
      .should("be.visible")
      .and('have.text', 'Photo by Engin Akyurt');
  }

}

module.exports = new Homepage();
