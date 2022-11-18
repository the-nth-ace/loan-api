import { AuthController } from "Web/controllers/";

describe("Auth Controller Use Case", () => {
  const controller = new AuthController();

  it("Should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("Should have a sign-in method", () => {
    expect(controller.signin).toBeDefined();
  });

  it("Should have a signup method", () => {
    expect(controller.signin).toBeDefined();
  });

  it("Should have a activateUser method", () => {
    expect(controller.activateUser).toBeDefined();
  });

  it("Should have a forgotPassword method", () => {
    expect(controller.forgotPassword).toBeDefined();
  });
});
