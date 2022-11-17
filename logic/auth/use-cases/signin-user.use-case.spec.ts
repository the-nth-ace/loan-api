import { SigninUserUseCase } from "Logic/auth/use-cases/signin-user.use-case";

describe("SignIn User Use Case", () => {
  const useCase = new SigninUserUseCase();

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });
});
