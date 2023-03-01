import Homepage from '../../pages/homepage';

describe('Homepage', () => {
  it('displays the homepage', () => {
    cy.visit('http://demo.billclaytor.com');
    Homepage.verifyPageElements();
  })
})