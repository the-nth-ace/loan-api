import { ActivateUserUseCase } from "Logic/auth";
import { TestUserRepository } from "Domain/auth";

describe("Activate User Use Case", () => {
  const repo = new TestUserRepository();
  const dto: any = {};
  const id = "122344";
  const mockedFindOne = jest.spyOn(repo, "findOne");
  const mockedUpdate = jest.spyOn(repo, "update");

  mockedFindOne.mockImplementation(async () => {
    return dto;
  });
  mockedUpdate.mockImplementation(async () => {
    return dto;
  });

  const useCase = new ActivateUserUseCase(repo, id, dto);

  it("Should be defined", () => {
    expect(useCase).toBeDefined();
  });

  it("Should have a private _userRepo property", () => {
    expect(useCase).toHaveProperty("_userRepo");
  });

  it("Should have a _userId property", () => {
    expect(useCase).toHaveProperty("_userId");
  });

  it("Should have a private _dto property", () => {
    expect(useCase).toHaveProperty("_dto");
  });

  it("Should have a public execute method", () => {
    expect(useCase.execute).toBeDefined();
  });

  it("Should call _userRepo.findOne() when execute() is called", async () => {
    await useCase.execute();
    expect(mockedFindOne).toHaveBeenCalled();
  });

  it("Should call _userRepo.update() when execute() is called", async () => {
    await useCase.execute();
    expect(mockedUpdate).toHaveBeenCalled();
  });
});
