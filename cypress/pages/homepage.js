class Homepage{

  elements = {
    navbar : () => cy.xpath("//nav[@id='main-navbar']"),
    navbarBrand : () => cy.xpath("//span[@class='navbar-brand'][text()='Developer Bookshelf']"),
    navbarLinkHome : () => cy.xpath("//a[@class='nav-link'][text()='Home']"),
    navbarLinkAuthors : () => cy.xpath("//a[@class='nav-link'][text()='Authors']"),
    navbarLinkBooks : () => cy.xpath("//a[@class='nav-link'][text()='Books']"),
    header : () => cy.xpath("//div[@id='header']"),
    textHeading : () => cy.xpath("//h1[text()='Developer Bookshelf']"),
    textSubHeading : () => cy.xpath("//h3[text()='A Ruby on Rails demo']"),
    imgBackground : () => cy.xpath(""),
    content : () => cy.xpath("//div[@id='content']"),
    linkBrowseByAuthor : () => cy.xpath("//a[text()='author name']"),
    linkBrowseByBook : () => cy.xpath("//a[text()='book title']"),
    linkGithub : () => cy.xpath("//a[text()='Github']"),
    linkKanbanBoard : () => cy.xpath("//a[text()='Kanban board']"),
    footer : () => cy.xpath("//div[@id='footer']"),
    linkPhotoCredit : () => cy.xpath("//a[text()='Photo by Engin Akyurt']"),
  }

  verifyPageElements() {
    this.verifyNavbarElements();
    this.verifyHeaderElements();
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

  verifyHeaderElements() {
    this.elements.header().should("be.visible");
    this.elements.textHeading().should("be.visible");
    this.elements.textSubHeading().should("be.visible");
    // this.elements.imgBackground.should("be.visible");
  }

  verifyContentElements() {
    this.elements.content().should("be.visible");
    this.elements.linkBrowseByAuthor().should("be.visible");
    this.elements.linkBrowseByBook().should("be.visible");
    this.elements.linkGithub().should("be.visible");
    this.elements.linkKanbanBoard().should("be.visible");
  }

  verifyFooterElements() {
    this.elements.footer().should("be.visible");
    this.elements.linkPhotoCredit().should("be.visible");
  }



}

module.exports = new Homepage();
