Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error to the console
    console.error('Uncaught Exception:', err.message);
    // Optionally, return false to prevent Cypress from failing the test
    return false;
  });