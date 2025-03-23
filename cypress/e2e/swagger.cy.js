const user = require("../fixtures/user.json");
const updatedUser = require("../fixtures/updatedUser.json");

describe("API tests", () => {
  it("create user", () => {
    cy.request({
      method: "POST",
      url: `/`,
      body: user,
    })
      .its("status")
      .should("be.eq", 200);
  });

  it("name change", () => {

    cy.request({
      method: "PUT",
      url: `/${user.username}`,
      body: updatedUser,
    })
      .its("status")
      .should("be.eq", 200);
  });
  
  it("delete user", () => {
    cy.request({
      method: "DELETE",
      url: `/${user.username}`,
    })
      .its("status")
      .should("be.eq", 200);

  });

})
