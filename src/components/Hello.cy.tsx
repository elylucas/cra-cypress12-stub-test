/// <reference types="cypress" />
import * as SayHello from './sayHello';

import Hello from './Hello';

describe('Hello', () => {
  it('should say Whattup', () => {
    cy.stub(SayHello, 'sayHello').returns('Whattup');
    cy.mount(<Hello />);
    cy.get('.my-div').should('have.text', 'Whattup');
  });
});
