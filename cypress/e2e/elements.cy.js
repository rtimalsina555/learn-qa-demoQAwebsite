describe('elements test', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');
    cy.get('.card-body').contains('Elements').click();
    cy.url().should('contain', 'https://demoqa.com/elements');
    cy.get('.header-text').contains('Elements').click();
  });

  it('Text Box test', () => {
    cy.get('.menu-list').contains('Text Box').click();
    cy.get('.text-center').should('have.text', 'Text Box');
    //Full Name
    cy.get('#userName-label').should('have.text', 'Full Name');
    cy.get('#userName').click().clear().type('Samantha Ruth');
    cy.get('#submit').should('contain', 'Submit').click();
    cy.get('#name').should('have.text', 'Name:Samantha Ruth');
    //Email
    cy.get('#userEmail-label').should('have.text', 'Email');
    cy.get('#userEmail').click().clear().type('Samantha Ruth'); //Invalid email
    cy.get('#submit').should('contain', 'Submit').click();
    cy.get('.mr-sm-2.field-error.form-control').should('exist');
    cy.get('#name').should('have.text', 'Name:Samantha Ruth');
    cy.get('#userEmail').click().clear().type('rsamantha@gmail.com');
    cy.get('#submit').should('contain', 'Submit').click();
    cy.get('#name').should('have.text', 'Name:Samantha Ruth');
    cy.get('#email').should('have.text', 'Email:rsamantha@gmail.com');
    //Current Address
    cy.get('#currentAddress-label').should('have.text', 'Current Address');
    cy.get('#currentAddress').click().clear().type('Chennai, Tamil Nadu');
    cy.get('#submit').should('contain', 'Submit').click();
    cy.get('#name').should('have.text', 'Name:Samantha Ruth');
    cy.get('#email').should('have.text', 'Email:rsamantha@gmail.com');
    cy.get('p[id="currentAddress"]').should('have.text', 'Current Address :Chennai, Tamil Nadu ');
    //Permanent Address
    cy.get('#permanentAddress-label').should('have.text', 'Permanent Address');
    cy.get('#permanentAddress').click().clear().type('Mumbai, {enter} India');
    cy.get('#submit').should('contain', 'Submit').click();
    cy.get('#name').should('have.text', 'Name:Samantha Ruth');
    cy.get('#email').should('have.text', 'Email:rsamantha@gmail.com');
    cy.get('p[id="currentAddress"]').should('have.text', 'Current Address :Chennai, Tamil Nadu ');
    cy.get('p[id="permanentAddress"]').should('have.text', 'Permananet Address :Mumbai, \n India');
  })

  it('Check Box Test', ()=> {
    cy.get('.menu-list').contains('Check Box').click({force: true});
    cy.get('.text-center').should('have.text', 'Check Box');
    cy.get('.rct-title').contains('Home');
    cy.get('.rct-checkbox').should('not.be.checked');
    cy.get('button[aria-label="Toggle"]').click();
    cy.get('.rct-title').contains('Desktop');
    cy.get('.rct-title').contains('Documents');
    cy.get('.rct-title').contains('Downloads');
    cy.get('.rct-checkbox').first().click();
    // cy.get('span.rct-checkbox').eq(1).should('be.visible').should('be.checked');
    // cy.get('.rct-checkbox').eq(2).should('be.checked');
    // cy.get('.rct-checkbox').last().should('be.checked');
  })

  it('Radio Button', () => {
    cy.get('.menu-list').contains('Radio Button').click({force: true});
    cy.get('.text-center').should('have.text', 'Radio Button');
    cy.get('.mb-3').should('have.text', 'Do you like the site?');
    cy.get('label[for="yesRadio"]').should('contain', 'Yes').click();
    cy.get('.mt-3').should('have.text', 'You have selected Yes');
    cy.get('label[for="impressiveRadio"]').should('contain', 'Impressive').click();
    cy.get('.mt-3').should('have.text', 'You have selected Impressive');
    cy.get('label[for="noRadio"]').should('have.class', 'custom-control-label', 'disabled');
  })

  it('Web Tables', ()=> {
    cy.get('.menu-list').contains('Web Tables').click({force: true});
    cy.get('.text-center').should('have.text', 'Web Tables');
    cy.get('#addNewRecordButton').should('contain', 'Add').click();
    cy.get('.modal-title').should('have.text', 'Registration Form');
    cy.get('#firstName-label').should('have.text', 'First Name');
    cy.get('#firstName').click().clear().type('John');
    cy.get('#lastName-label').should('have.text', 'Last Name');
    cy.get('#lastName').click().clear().type('Cena');
    cy.get('#userEmail-label').should('have.text', 'Email');
    cy.get('#userEmail').click().clear().type('jcena@gmail.com');
    cy.get('#age-label').should('have.text', 'Age');
    cy.get('#age').click().clear().type('48');
    cy.get('#salary-label').should('have.text', 'Salary');
    cy.get('#salary').click().clear().type('45000');
    cy.get('#department-label').should('have.text', 'Department');
    cy.get('#department').click().clear().type('WWE Wrestler');
    cy.get('#submit').should('contain', 'Submit').click();
    cy.get('#searchBox').click().clear().type('John');
    cy.get('.mr-2').click();
    cy.get('button[class=close]').click();
    cy.get('span[title="Delete"]').click();
  })

  it.only('Buttons', () => {
    cy.get('.menu-list').contains('Buttons').click({force: true});
    cy.get('.text-center').should('have.text', 'Buttons');
    //Double Click
    cy.get('#doubleClickBtn').should('contain', 'Double Click Me').dblclick();
    cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    //Right Click
    cy.get('#rightClickBtn').should('contain', 'Right Click Me').rightclick();
    cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    //Dynamic button
    cy.get('.mt-4').eq(3).contains('Click Me').click();
    cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
  })

  
})