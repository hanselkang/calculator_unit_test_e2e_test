describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons2', () => {
    cy.get('#number2').click();
    cy.get('.display').should('text', '2')
  })

  it('should have working number buttons3', () => {
    cy.get('#number3').click();
    cy.get('.display').should('text', '3')
  })

  it('should have working number buttons321', () => {
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('.display').should('text', '321')
  })

  it('should have working with add operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '5')
  })

  it('should have working with subtract operation', () => {
    cy.get('#number3').click();
    cy.get('#number0').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '28')
  })

  it('should have working with multiply operation', () => {
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '66')
  })

  it('should have working with divide operation', () => {
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '3')
  })

  it('should be able to operate chain multiple', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '7')
  })

  it('should be able to operate negative number', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '-3')
  })

  it('should be able to operate decimals', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '1.5')
  })

  it('should be able to operate big number', () => {
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '1620420')
  })

  it('should be able to operate positive, decimal with large number', () => {
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', '1620611.2')
  })


  it('should return "ERROR" when divide by 0', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('text', 'ERROR')
  })

})