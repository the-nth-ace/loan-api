import { SignInUserUseCase } from "./sign-in-user.use-case";

describe("SignIn User Use Case", () => {
  const useCase = new SignInUserUseCase();

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
});
