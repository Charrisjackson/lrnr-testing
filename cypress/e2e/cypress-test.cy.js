
  describe("Homepage Tests", () => {
      beforeEach(() => {
        // Visit the homepage before each test
        cy.visit("http://localhost:5173/");
      });
    
      it("should load the homepage successfully", () => {
        // Ensure the page loads and has the correct title
        cy.title().should("exist");
    
        // Ensure the main heading exists
        cy.get("title").should("exist");
    
        // Ensure a description paragraph exists
        cy.get("[data-test-id=homepage-description]").should("exist");
    
        // Ensure the Quiz Generator button exists
        cy.get("[data-test-id=navigate-quiz-generator]").should("exist");
    
        // Ensure no error messages are present
        cy.get("body").should("not.contain", "Error");
      });
    
      it("should navigate to the quiz generator page when button is clicked", () => {
        // Click the button to navigate to quiz generator
        cy.get("[data-test-id=navigate-quiz-generator]").click();
    
        // Ensure the URL changes to the quiz generator page
        cy.url().should("include", "/quizgenerator");
      });
    
      it("should have a functional navigation bar", () => {
        // Verify that the navbar exists
        cy.get("[data-test-id=navbar]").should("exist");
    
        // Click on the home link in the navbar and ensure it navigates correctly
        cy.get("[data-test-id=nav-home]").click();
        cy.url().should("eq", "http://localhost:5173/");
    
        // Click on the quiz generator link and verify navigation
        cy.get("[data-test-id=nav-quiz-generator]").click();
        cy.url().should("include", "/quizgenerator");
      });
    
      it("should display the footer correctly", () => {
        // Verify that the footer exists
        cy.get("[data-test-id=footer]").should("exist");
      });
    });
    
  