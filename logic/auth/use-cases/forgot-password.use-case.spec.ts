import { ForgotPasswordUseCase } from "Logic/auth";
import { TestUserRepository } from "Domain/auth";

describe("Forgot Password Use Case", () => {
  const repo = new TestUserRepository();
  const id = "122344";
  const dto: any = {};

  const mockedFindOne = jest.spyOn(repo, "findOne");
  const mockedUpdate = jest.spyOn(repo, "update");

  mockedFindOne.mockImplementation(async () => {
    return dto;
  });
  mockedUpdate.mockImplementation(async () => {
    return dto;
  });

  const useCase = new ForgotPasswordUseCase(repo, id, dto);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("Should have a _userRepo property", () => {
    expect(useCase).toHaveProperty("_userRepo");
  });

  it("Should have a _userId property", () => {
    expect(useCase).toHaveProperty("_userId");
  });

  it("Should have a _dto property", () => {
    expect(useCase).toHaveProperty("_dto");
  });

  it("Should have an execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("Should call _userRepo.update() when execute() is called", async () => {
    await useCase.execute();
    expect(mockedUpdate).toHaveBeenCalled();
  });
});
